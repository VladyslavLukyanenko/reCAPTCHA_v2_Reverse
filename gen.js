const fs = require("fs");
const esprima = require("esprima");
const escodegen = require("escodegen");
const estraverse = require("estraverse");

var script = fs.readFileSync("original.js", "utf8");

var $script = esprima.parseScript(script);

//console.log($script)

let strings = [];

let rotateInt;

estraverse.replace($script, {
  enter: function (node, parent) {
    if (
      node.type == "AssignmentExpression" &&
      node.right.type == "CallExpression" &&
      node.left.type == "Identifier" &&
      node.right.callee.object &&
      node.right.callee.object.type == "Literal" &&
      node.right.callee.object.value.length > 100
    ) {
      strings = node.right.callee.object.value[node.right.callee.property.name](
        node.right.arguments[0].value
      );
      this.remove();
    }
  },
});

estraverse.replace($script, {
  enter: function (node, parent) {
    if (
      node.type == "CallExpression" &&
      node.callee.params &&
      node.callee.params.length == 3 &&
      node.arguments &&
      node.arguments.length == 2
    ) {
      rotateInt = node.arguments[1].value;
      this.remove();
    }
  },
});

while (rotateInt--) strings.push(strings.shift());

estraverse.replace($script, {
  enter: function (node, parent) {
    if (
      node.type == "AssignmentExpression" &&
      node.operator == "=" &&
      node.right.type == "FunctionExpression" &&
      node.right.params.length == 2 &&
      node.right.body.body[0].type == "VariableDeclaration" &&
      node.right.body.body[1].type == "ReturnStatement" &&
      node.right.body.body[1].argument.expressions.length == 3
    ) {
      var call = node.left.name;
      estraverse.replace($script, {
        enter: function (node, parent) {
          if (node.type == "CallExpression" && node.callee.name == call) {
            const i = parseInt(node.arguments[0].value);
            return {
              type: "Literal",
              value: strings[i],
            };
          }
        },
      });
      this.remove();
    }
  },
});

let functions = {};
estraverse.replace($script, {
  enter: function (node, parent) {
    if (node.type == "CallExpression" && node.callee.params) {
      estraverse.replace(node, {
        enter: function (node, parent) {
          if (node.type == "AssignmentExpression" && node.operator == "=") {
            switch (node.right.type) {
              case "FunctionExpression": {
                if (
                  node.left.property &&
                  node.left.type == "MemberExpression" &&
                  node.right.body.body[0].type == "ReturnStatement"
                ) {
                  switch (node.right.body.body[0].argument.type) {
                    case "BinaryExpression": {
                      functions[node.left.property.value] = {
                        type: node.right.body.body[0].argument.type,
                        operator: node.right.body.body[0].argument.operator,
                        node,
                      };
                      this.remove();
                      break;
                    }
                    case "CallExpression": {
                      functions[node.left.property.value] = {
                        type: node.right.body.body[0].argument.type,
                        node,
                      };
                      this.remove();
                      break;
                    }
                  }
                }
                //this.remove();
                break;
              }
              case "Literal": {
                if (node.left.type == "MemberExpression") {
                  functions[node.left.property.value] = {
                    type: "Literal",
                    node,
                    value: node.right.value,
                  };
                  //this.remove();
                }
                //break;
              }
            }
          }
        },
      });
    }
  },
});

estraverse.replace($script, {
  enter: function (node, parent) {
    switch (node.type) {
      case "CallExpression": {
        if (node.callee.object && node.callee.property) {
          if (node.callee.property.value) {
            var entry = functions[node.callee.property.value];
            if (entry !== undefined) {
              switch (entry.type) {
                case "BinaryExpression": {
                  return {
                    type: "BinaryExpression",
                    operator: entry.operator,
                    left: node.arguments[0],
                    right: node.arguments[1],
                  };
                }
                case "CallExpression": {
                  return {
                    type: "CallExpression",
                    callee: node.arguments[0],
                    arguments: node.arguments.slice(1),
                  };
                }
              }
            }
          }
          //console.log(fn)
        }
        break;
      }

      case "SequenceExpression": {
        for (var sidx = 0; sidx < node.expressions.length; sidx++) {
          var curr = node.expressions[sidx];
          if (curr.type === "AssignmentExpression") {

            if (curr.left.type !== "MemberExpression" || curr.right.type !== "Literal") {
              continue;
            }

            var member = curr.left;
            var entry = functions[member.property.value];
            if (entry  && entry.type === "Literal") {
              // this.remove();
              // return {
              //   type: "EmptyStatement"
              // }
              node.expressions.splice(sidx, 1);
              sidx--;
            }
          }
        }
        break;
      }
      case "MemberExpression": {
        if (parent && parent.type === "AssignmentExpression") {
          return;
        }
        //console.log(node, node.property.value)
        var entry = functions[node.property.value];
        if (entry !== undefined && entry.type == "Literal") {
          return {
            type: "Literal",
            value: entry.value,
          };
        }
        break;
      }
    }
  },
});
estraverse.replace($script, {
  enter: function (node, parent) {
    if (
      node.type == "ForStatement" &&
      node.init &&
      node.init.type == "SequenceExpression" &&
      node.init.expressions[0].right &&
      node.init.expressions[0].right.type == "CallExpression" &&
      node.init.expressions[0].right.callee.property &&
      node.init.expressions[0].right.callee.property.value == "split"
    ) {
      if (
        node.body.body[0].type !== "SwitchStatement" ||
        !node.init.expressions[0].right.callee.object.value ||
        !node.init.expressions[0].right.callee.object.value.split
      )
        return;
      const sequence = node.init.expressions[0].right.callee.object.value.split(
        node.init.expressions[0].right.arguments[0].value
      );
      const switchStatement = node.body.body[0];

      //console.log(parent.body[0])

      sequence.forEach((element) => {
        const ca = switchStatement.cases.filter(
          (x) => x.test.value == element
        )[0];

        ca.consequent.slice(0, -1).forEach((statement) => {
          parent.body.push(statement);
        });
        const lastStatement = ca.consequent.pop();
        if (lastStatement.type == "ReturnStatement") {
          parent.body.push(lastStatement);
        }
        this.remove();
      });
      this.remove();
    }
  },
});

// var switchreg = new RegExp("(\\d\\|)+\\d");
// estraverse.replace($script, {
//   enter: function (node, parent) {
//     try {
//       if (
//         node.declarations[0].init.callee.property.value == "split" &&
//         switchreg.test(node.declarations[0].init.callee.object.value)
//       ) {
//         var name = node.declarations[0].id.name;
//         var order = node.declarations[0].init.callee.object.value.split("|");
//         estraverse.replace(parent, {
//           enter: function (node, parent) {
//             if (
//               node.type == "WhileStatement" &&
//               node.body.body[0].discriminant.object.name == name
//             ) {
//               for (idx of order) {
//                 parent.body.push(node.body.body[0].cases[idx].consequent[0]);
//               }
//               this.remove();
//             }
//           },
//         });
//         this.remove();
//       }
//     } catch (ignore) {}
//   },
// });

// estraverse.traverse($script, {
//     enter: function(node, parent) {
//         if (node.type == 'MemberExpression' && node.computed == true && typeof node.property.value != "undefined" && isNaN(node.property.value)) {
//             return {
//                 type: 'MemberExpression',
//                 computed: false,
//                 object: node.object,
//                 property: {
//                     type: 'Identifier',
//                     name: node.property.value
//                 }
//             }
//         }
//         if (node.type == 'UnaryExpression' && node.operator == '!'){
//             if (node.argument.type == 'UnaryExpression' && node.argument.operator == '!'){
//                 if (node.argument.argument.type == 'ArrayExpression' && node.argument.argument.elements.length == 0){
//                     return {
//                         type: 'Literal',
//                         value: true
//                     }
//                 }
//             } else if (node.argument.type == 'ArrayExpression' && node.argument.elements.length == 0){
//                 return {
//                     type: 'Literal',
//                     value: false
//                 }
//             }
//         }
//     }
// })
// console.log(escodegen.generate($script));
const deobfuscated = escodegen.generate($script);
fs.writeFileSync("./gen.deobf.js", deobfuscated, {encoding: "utf8"})
//console.log(strings[0])

//console.log(identifier);
//console.log(rotateInt)
