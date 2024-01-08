"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var esprima = require("esprima");
var escodegen = require("escodegen");
var estraverse = require("estraverse");
// const inputFile = "anchor_init_bg.js";
// const outputFile = "./anchor_init_bg.deobfuscated.js"
// const inputFile = "1WCIDWTNbCKChqewkQcA8N0ytqV1gIFiu2YL9uG6ltk.js";
// const outputFile = "./1WCIDWTNbCKChqewkQcA8N0ytqV1gIFiu2YL9uG6ltk.deobfuscated.js"
// const inputFile = "./playground.js";
// const outputFile = "./playground.deobf.js";
var inputFile = "recaptcha__en.js";
var outputFile = "./deobfuscated.js";
var globalArgsCounter = 0;
var globalVarCounter = 0;
var script = fs.readFileSync(inputFile, "utf8");
var $script = esprima.parseScript(script, {
    loc: true
});
// 1. split simple sequence statements (comma separated)
estraverse.replace($script, {
    enter: function (node, parent) {
        if (node.type !== "BlockStatement") {
            return;
        }
        if (node.body.length !== 1) {
            return;
        }
        var expr = node.body[0];
        if (expr.type !== "ExpressionStatement" || expr.expression.type !== "SequenceExpression") {
            return;
        }
        // return {
        //   type: "Literal", value: "Replaced"
        // };
        //
        return {
            type: "BlockStatement",
            body: expr.expression.expressions /**/.map(function (s) { return ({
                type: "ExpressionStatement",
                expression: s
            }); })
        };
    },
});
// 2. convert comma variable declarations to separate statements
estraverse.replace($script, {
    enter: function (node, parent) {
        if (node.type !== "BlockStatement" || node.body.every(function (n) { return n.type !== "VariableDeclaration"; })) {
            return;
        }
        var body = [];
        var _loop_1 = function (c) {
            if (c.type === "VariableDeclaration" && c.declarations.length > 1) {
                body.push.apply(body, c.declarations.map(function (s) { return (__assign(__assign({}, c), { declarations: [s] })); }));
            }
            else {
                body.push(c);
            }
        };
        for (var _i = 0, _a = node.body; _i < _a.length; _i++) {
            var c = _a[_i];
            _loop_1(c);
        }
        return {
            type: "BlockStatement",
            body: body
        };
    },
});
// 3. split return sequence
estraverse.replace($script, {
    enter: function (node, parent) {
        var _a;
        if (node.type !== "BlockStatement") {
            return;
        }
        var returnStmt = node.body[node.body.length - 1];
        if ((returnStmt === null || returnStmt === void 0 ? void 0 : returnStmt.type) !== "ReturnStatement") {
            return;
        }
        if (((_a = returnStmt.argument) === null || _a === void 0 ? void 0 : _a.type) !== "SequenceExpression") {
            return;
        }
        var body = splitReturnSeqStatementToExprsArray(returnStmt);
        return {
            type: "BlockStatement",
            body: __spreadArray(__spreadArray([], node.body.slice(0, -1)), body)
        };
    },
});
var globalApis = [];
// 3. unwrap global apis (functions that returns just arrays
estraverse.replace($script, {
    enter: function (node, parent) {
        if (node.type === "VariableDeclaration"
            && node.declarations.length === 1
            && node.declarations[0].type === "VariableDeclarator") {
            var decl = node.declarations[0];
            if (decl.init
                && decl.id.type === "Identifier"
                && decl.init.type === "CallExpression"
                && decl.init.callee.type === "FunctionExpression"
                && decl.init.callee.body.type === "BlockStatement"
                && decl.init.callee.body.body[0].type === "ReturnStatement"
                && decl.init.callee.body.body[0].argument.type === "ArrayExpression"
                && decl.init.callee.body.body[0].argument.elements.every(function (e) { return e.type === "FunctionExpression"; })) {
                decl.init = decl.init.callee.body.body[0].argument;
                globalApis.push(decl.id.name);
            }
        }
    }
});
// 4. replace !0 and !1 to boolean
estraverse.replace($script, {
    enter: function (node, parent) {
        if (node.type === "UnaryExpression" && node.operator === "!" && node.argument.type === "Literal") {
            if (node.argument.value === 1 || node.argument.value === 0) {
                return {
                    type: "Literal",
                    value: !node.argument.value
                };
            }
        }
    }
});
// 5. make cases to have block statement as consequent part
estraverse.replace($script, {
    enter: function (node, parent) {
        if (node.type !== "SwitchCase") {
            return;
        }
        if (node.consequent.every(function (e) { return e.type === "BlockStatement"; })) {
            return;
        }
        node.consequent = [
            {
                type: "BlockStatement",
                body: __spreadArray([], node.consequent)
            }
        ];
    }
});
// 5. control flow
estraverse.replace($script, {
    enter: function (node, parent) {
        var _a;
        if (node.type !== "BlockStatement") {
            return;
        }
        // processing if statements.
        for (var i = 0; i < node.body.length; i++) {
            var curr = node.body[i];
            var toAppend = [];
            switch (curr.type) {
                case "IfStatement":
                    if (curr.consequent.type !== "BlockStatement") {
                        curr.consequent = {
                            type: "BlockStatement",
                            body: [
                                curr.consequent
                            ]
                        };
                    }
                    if (curr.alternate && curr.alternate.type !== "BlockStatement") {
                        curr.alternate = {
                            type: "BlockStatement",
                            body: [
                                curr.alternate
                            ]
                        };
                    }
                    if (curr.test.type === "LogicalExpression") {
                        var logical = curr.test;
                        // if (logical.operator === "&&") {
                        //   curr.test = logical.right;
                        //   const ifStmt = convertLogicalExpressionToIfStatement(logical);
                        //   ifStmt.consequent = curr;
                        //   ifStmt.alternate = curr.alternate;
                        //   curr.alternate = null;
                        //   node.body[i] = ifStmt;
                        //   i--;
                        // }
                        // if (logical.left.type === "UnaryExpression") {
                        //
                        // }
                        processLogicalExpr(logical, toAppend);
                    }
                    else {
                        processIfStatementInBlock(curr, toAppend);
                    }
                    break;
                case "ExpressionStatement":
                    switch (curr.expression.type) {
                        case "AssignmentExpression":
                            if (curr.expression.right.type === "ConditionalExpression" && curr.expression.left.type === "Identifier") {
                                var cond = curr.expression.right;
                                var id = curr.expression.left;
                                var ifExpr = {
                                    type: "IfStatement",
                                    test: cond.test,
                                    consequent: {
                                        type: "BlockStatement",
                                        body: [
                                            {
                                                type: "ExpressionStatement",
                                                expression: {
                                                    type: "AssignmentExpression",
                                                    left: id,
                                                    right: cond.consequent,
                                                    operator: curr.expression.operator
                                                }
                                            }
                                        ]
                                    },
                                    alternate: {
                                        type: "BlockStatement",
                                        body: [
                                            {
                                                type: "ExpressionStatement",
                                                expression: {
                                                    type: "AssignmentExpression",
                                                    left: curr.expression.left,
                                                    right: cond.alternate,
                                                    operator: curr.expression.operator
                                                }
                                            }
                                        ]
                                    }
                                };
                                node.body[i] = ifExpr;
                                i--;
                            }
                            else if (curr.expression.right.type === "LogicalExpression") {
                                var logical = curr.expression.right;
                                var id = {
                                    type: "Identifier",
                                    name: "var_" + globalVarCounter++
                                };
                                curr.expression.right = id;
                                var variable_1 = {
                                    type: "VariableDeclaration",
                                    kind: "var",
                                    declarations: [
                                        {
                                            type: "VariableDeclarator",
                                            init: logical,
                                            id: id
                                        }
                                    ]
                                };
                                node.body.splice(i, 0, variable_1);
                                i--;
                            }
                            /*
                                          else if (curr.expression.right.type === "LogicalExpression" && (curr.expression.left.type === "Identifier" || curr.expression.left.type === "MemberExpression")) {
              
                                            const cond = curr.expression.right;
                                            const id: ESTree.Identifier | ESTree.MemberExpression = curr.expression.left;
                                            const ifExpr: ESTree.IfStatement = {
                                              type: "IfStatement",
                                              test: cond.test,
                                              consequent: {
                                                type: "BlockStatement",
                                                body: [
                                                  {
                                                    type: "ExpressionStatement",
                                                    expression: {
                                                      type: "AssignmentExpression",
                                                      left: id,
                                                      right: cond.consequent,
                                                      operator: curr.expression.operator
                                                    }
                                                  }
                                                ]
                                              },
                                              alternate: {
                                                type: "BlockStatement",
                                                body: [
                                                  {
                                                    type: "ExpressionStatement",
                                                    expression: {
                                                      type: "AssignmentExpression",
                                                      left: curr.expression.left,
                                                      right: cond.alternate,
                                                      operator: curr.expression.operator
                                                    }
                                                  }
                                                ]
                                              }
                                            };
              
                                            node.body[i] = ifExpr;
                                            i--;
              
                                            //
                                            // const logical: ESTree.LogicalExpression = curr.expression.right;
                                            // const id: ESTree.Identifier = {
                                            //   type: "Identifier",
                                            //   name: "var_" + curr.expression.right.loc.start.line + "_" + curr.expression.right.loc.start.column
                                            // };
                                            // curr.expression.right = id;
                                            //
                                            // const variable: ESTree.VariableDeclaration = {
                                            //   type: "VariableDeclaration",
                                            //   kind: "var",
                                            //   declarations: [
                                            //     {
                                            //       type: "VariableDeclarator",
                                            //       init: logical,
                                            //       id
                                            //     }
                                            //   ]
                                            // }
                                            //
                                            // node.body.splice(i, 0, variable);
                                            // i--;
                                          }*/
                            else {
                                processAssignmentExpressionInExpressionStmt(curr.expression, toAppend);
                            }
                            break;
                        case "CallExpression":
                            processCallExpr(curr.expression, toAppend);
                            break;
                        case "NewExpression":
                            processNewExpr(curr.expression, toAppend);
                            break;
                        case "LogicalExpression":
                            node.body[i] = convertLogicalExpressionToIfStatement(curr.expression);
                            i--;
                            break;
                        case "SequenceExpression":
                            curr.expression = simplifySequenceExpr(curr.expression, toAppend);
                            break;
                        case "ConditionalExpression":
                            var ifStmt = __assign(__assign({}, curr.expression), { type: "IfStatement", consequent: {
                                    type: "ExpressionStatement",
                                    expression: curr.expression.consequent
                                }, alternate: !curr.expression.alternate ? null : {
                                    type: "ExpressionStatement",
                                    expression: curr.expression.alternate
                                } });
                            node.body[i] = ifStmt;
                            i--;
                            break;
                    }
                    break;
                case "ReturnStatement":
                    if (!curr.argument || curr.argument.type === "Identifier" || curr.argument.type === "Literal" || curr.argument.type === "MemberExpression" && !curr.argument.computed) {
                        return;
                    }
                    var variable = {
                        type: "Identifier",
                        name: "var_" + globalVarCounter++
                    };
                    var varDecl = {
                        type: "VariableDeclaration",
                        kind: "var",
                        declarations: [
                            {
                                type: "VariableDeclarator",
                                init: curr.argument,
                                id: variable
                            }
                        ]
                    };
                    node.body.splice(i, 0, varDecl);
                    i--;
                    curr.argument = variable;
                    //
                    // switch (curr.argument.type) {
                    //   case "ConditionalExpression":
                    //     const variableId: ESTree.Identifier = {
                    //       type: "Identifier",
                    //       name: "returnValue" + node.body.filter(_ => _.type === "ReturnStatement").length
                    //     };
                    //
                    //     const variable: ESTree.VariableDeclaration = {
                    //       type: "VariableDeclaration",
                    //       declarations: [
                    //         {
                    //           type: "VariableDeclarator",
                    //           id: variableId,
                    //           init: curr.argument
                    //         }
                    //       ],
                    //       kind: "var"
                    //     }
                    //
                    //     toAppend.push(variable);
                    //     curr.argument = variableId;
                    //     // } else {
                    //     //   processCondExpr(curr.argument, toAppend);
                    //     // }
                    //     break;
                    //   case "CallExpression":
                    //     processCallExpr(curr.argument, toAppend);
                    //     break;
                    //   case "SequenceExpression":
                    //     curr.argument = simplifySequenceExpr(curr.argument, toAppend);
                    //     break;
                    //   case "ObjectExpression":
                    //     processObjectExpr(curr.argument, toAppend);
                    //     break;
                    //   case "AssignmentExpression":
                    //     // processAssignmentExpressionInExpressionStmt(curr.argument, toAppend);
                    //     break;
                    // }
                    break;
                case "VariableDeclaration":
                    for (var _i = 0, _b = curr.declarations; _i < _b.length; _i++) {
                        var d = _b[_i];
                        if (!d.init) {
                            continue;
                        }
                        switch (d.init.type) {
                            case "SequenceExpression":
                                d.init = simplifySequenceExpr(d.init, toAppend);
                                break;
                            case "LogicalExpression":
                                processLogicalExpr(d.init, toAppend);
                                break;
                            case "CallExpression":
                                processCallExpr(d.init, toAppend);
                                break;
                            case "ArrayExpression":
                                processArrayExpr(d.init, toAppend);
                                // for (let eidx = 0; eidx < d.init.elements.length; eidx++) {
                                //   const el = d.init.elements[eidx];
                                //   if (el.type === "SequenceExpression") {
                                //     d.init.elements[eidx] = simplifySequenceExpr(el, toAppend);
                                //   }
                                // }
                                break;
                            case "NewExpression":
                                processNewExpr(d.init, toAppend);
                                break;
                            case "ObjectExpression":
                                processObjectExpr(d.init, toAppend);
                                break;
                            case "ConditionalExpression":
                                if (d.id.type === "Identifier") {
                                    var cond = d.init;
                                    d.init = {
                                        type: "Literal",
                                        value: null,
                                        raw: "null"
                                    };
                                    var id = d.id;
                                    var ifExpr = {
                                        type: "IfStatement",
                                        test: cond.test,
                                        consequent: {
                                            type: "BlockStatement",
                                            body: [
                                                {
                                                    type: "ExpressionStatement",
                                                    expression: {
                                                        type: "AssignmentExpression",
                                                        left: id,
                                                        right: cond.consequent,
                                                        operator: "="
                                                    }
                                                }
                                            ]
                                        },
                                        alternate: {
                                            type: "BlockStatement",
                                            body: [
                                                {
                                                    type: "ExpressionStatement",
                                                    expression: {
                                                        type: "AssignmentExpression",
                                                        left: id,
                                                        right: cond.alternate,
                                                        operator: "="
                                                    }
                                                }
                                            ]
                                        }
                                    };
                                    node.body.splice(i + 1, 0, ifExpr);
                                    i--;
                                }
                                break;
                            case "AssignmentExpression":
                                processAssignmentExpressionInExpressionStmt(d.init, toAppend);
                                break;
                            case "BinaryExpression":
                                processBinaryExpression(d.init, toAppend);
                                break;
                            case "UnaryExpression":
                                processUnaryExpr(d.init, toAppend);
                                break;
                        }
                    }
                    break;
                case "ForStatement":
                    if (curr.body.type !== "BlockStatement") {
                        curr.body = {
                            type: "BlockStatement",
                            body: [
                                curr.body
                            ]
                        };
                    }
                    if (curr.init) {
                        toAppend.push({
                            type: "ExpressionStatement",
                            expression: curr.init
                        });
                        curr.init = null;
                    }
                    //
                    // if (curr.init?.type === "AssignmentExpression") {
                    //   processAssignmentExpressionInExpressionStmt(curr.init, toAppend)
                    // } else if (curr.init?.type === "SequenceExpression") {
                    //   curr.init = simplifySequenceExpr(curr.init, toAppend);
                    // }
                    break;
            }
            if (toAppend.length) {
                (_a = node.body).splice.apply(_a, __spreadArray([i, 0], toAppend));
                i--;
            }
        }
    },
});
// 6. remove arguments obf using arrays
for (var times = 0; times < 5; times++)
    estraverse.replace($script, {
        enter: function (block, parent) {
            if (block.type !== "BlockStatement") {
                return;
            }
            var foundIds = [];
            var foundIdIxs = [];
            var _loop_2 = function (i) {
                var curr = block.body[i];
                if (curr.type === "ExpressionStatement"
                    && curr.expression.type === "AssignmentExpression"
                    && curr.expression.right.type === "ArrayExpression"
                    && curr.expression.left.type === "Identifier") {
                    var currIdentifier_1 = curr.expression.left;
                    var currArray_1 = curr.expression.right;
                    // foundIds.push(currIdentifier);
                    // foundIdIxs.push(i);
                    for (var innerIdx = i + 1; innerIdx < block.body.length; innerIdx++) {
                        estraverse.replace(block.body[innerIdx], {
                            enter: function (nextNode) {
                                if (nextNode.type === "MemberExpression"
                                    && nextNode.computed
                                    && nextNode.object.type === "Identifier"
                                    && nextNode.property.type === "Literal"
                                    && typeof nextNode.property.value === "number"
                                    && nextNode.object.name === currIdentifier_1.name) {
                                    var value = currArray_1.elements[nextNode.property.value];
                                    if ((value === null || value === void 0 ? void 0 : value.type) === "Literal") {
                                        if (foundIdIxs.indexOf(i) === -1) {
                                            foundIds.push(currIdentifier_1);
                                            foundIdIxs.push(i);
                                        }
                                        return value;
                                    }
                                }
                            }
                        });
                    }
                }
            };
            // processing if statements.
            for (var i = 0; i < block.body.length; i++) {
                _loop_2(i);
            }
            var _loop_3 = function (idx) {
                var wasReplaced = true;
                var currIdentifier = foundIds[idx];
                var idIdx = foundIdIxs[idx];
                estraverse.traverse(block, {
                    enter: function (nextNode, nextNodeParent) {
                        if (nextNode.type === "Identifier" && nextNode.name === currIdentifier.name && nextNodeParent.type === "AssignmentExpression") {
                            return;
                        }
                        if (nextNode.type === "MemberExpression"
                            && nextNode.object.type === "Identifier"
                            && nextNode.object.name === currIdentifier.name) {
                            wasReplaced = false;
                        }
                    }
                });
            };
            for (var idx = 0; idx < foundIds.length; idx++) {
                _loop_3(idx);
            }
        }
    });
/*
// 7. convert fn expr call with return of fns array to object expr with methods
const transformedApiDecls: { name: string, fnsCount: number }[] = [];
estraverse.replace($script, {
  enter: function (node: ESTree.Node, parent?: ESTree.Node) {
    if (node.type === "VariableDeclarator"
      && node.init?.type === "CallExpression"
      && node.id.type === "Identifier"
      && node.init.callee.type === "FunctionExpression"
      && !node.init.callee.params.length
      && node.init.callee.body.type === "BlockStatement"
      && node.init.callee.body.body.length === 1
      && node.init.callee.body.body[0].type === "ReturnStatement"
      && node.init.callee.body.body[0].argument.type === "ArrayExpression"
      && node.init.callee.body.body[0].argument.elements.every(e => e.type === "FunctionExpression")) {
      const elements = node.init.callee.body.body[0].argument.elements;
      node.init = {
        type: "ObjectExpression",
        properties: elements.map((e, ix) => ({
          type: "Property",
          kind: "init",
          key: {
            type: "Identifier",
            name: "func" + ix
          },
          value: e
        }) as ESTree.Property)
      };
      transformedApiDecls.push({
        name: node.id.name,
        fnsCount: elements.length
      })
    }
  }
});


// 8. convert calls using idx to fn calls of global apis
estraverse.replace($script, {
  enter: function (node: ESTree.Node, parent?: ESTree.Node) {
    if (node.type === "MemberExpression") {
      if (node.object.type === "Identifier" && node.property.type === "Literal") {
        const id = node.object as ESTree.Identifier;
        const idxLiteral = node.property as ESTree.Literal;
        const transformInfo = transformedApiDecls.filter(_ => _.name === id.name)[0];
        if (transformInfo && transformInfo.fnsCount - 1 >= idxLiteral.value) {
          node.computed = false;
          node.property = {
            type: "Identifier",
            name: "func" + idxLiteral.value
          };
        }
      }
    }
  }
});*/
// 9. convert all function expr variable decl to func decl
estraverse.replace($script, {
    enter: function (node, parent) {
        var _a;
        if (node.type === "VariableDeclaration"
            && node.declarations.length === 1
            && ((_a = node.declarations[0].init) === null || _a === void 0 ? void 0 : _a.type) === "FunctionExpression") {
            return __assign(__assign({}, node.declarations[0].init), { type: "FunctionDeclaration", id: node.declarations[0].id });
        }
    }
});
var globalApiCallStats = {};
// collect global api usage stats
estraverse.traverse($script, {
    enter: function (node, parent) {
        if ((parent === null || parent === void 0 ? void 0 : parent.type) === "CallExpression"
            && node.type === "MemberExpression"
            && node.object.type === "Identifier"
            && ~globalApis.indexOf(node.object.name)
            && node.property.type === "Literal"
            && node.computed
            && parent.arguments.length
            && parent.arguments[0].type === "Literal"
            && typeof parent.arguments[0].value === "number"
            && typeof node.property.value === "number") {
            if (!globalApiCallStats[node.object.name]) {
                globalApiCallStats[node.object.name] = {};
            }
            var entry = globalApiCallStats[node.object.name];
            if (!entry[node.property.value]) {
                entry[node.property.value] = {};
            }
            var args = entry[node.property.value];
            var obfArg = parent.arguments[0].value;
            if (!args[obfArg]) {
                args[obfArg] = [];
            }
            var callArgsCount = args[obfArg];
            if (~callArgsCount.indexOf(parent.arguments.length)) {
                return;
            }
            callArgsCount.push(parent.arguments.length);
        }
    }
});
// bind/call
estraverse.traverse($script, {
    enter: function (call, parent) {
        if (!(call.type === "CallExpression"
            && call.arguments.length >= 2
            && call.arguments[1].type === "Literal"
            && typeof call.arguments[1].value === "number")) {
            return;
        }
        var callee = call.callee;
        if (callee.type !== "MemberExpression" || callee.object.type !== "MemberExpression") {
            return;
        }
        var deepestMember = callee.object;
        if (deepestMember.object.type === "Identifier"
            && deepestMember.property.type === "Literal"
            && typeof deepestMember.property.value === "number"
            && ~globalApis.indexOf(deepestMember.object.name)
            && deepestMember.computed
            && callee.property.type === "Identifier"
            && (callee.property.name === "bind" || callee.property.name === "call")) {
            if (!globalApiCallStats[deepestMember.object.name]) {
                globalApiCallStats[deepestMember.object.name] = {};
            }
            var entry = globalApiCallStats[deepestMember.object.name];
            if (!entry[deepestMember.property.value]) {
                entry[deepestMember.property.value] = {};
            }
            var args = entry[deepestMember.property.value];
            var obfArg = call.arguments[1].value;
            if (!args[obfArg]) {
                args[obfArg] = [];
            }
            var callArgsCount = args[obfArg];
            if (~callArgsCount.indexOf(call.arguments.length)) {
                return;
            }
            callArgsCount.push(call.arguments.length + 1);
        }
        // if (parent?.type === "CallExpression"
        //   && node.type === "MemberExpression"
        //   && node.object.type === "Identifier"
        //   && ~globalApis.indexOf(node.object.name)
        //   && node.property.type === "Literal"
        //   && node.computed
        //   && parent.arguments.length
        //   && parent.arguments[0].type === "Literal"
        //   && typeof parent.arguments[0].value === "number"
        //   && typeof node.property.value === "number") {
        //
        // }
    }
});
console.log(JSON.stringify(globalApiCallStats));
function getApiName(apiArrName, idx, firstArg) {
    return apiArrName + "_" + idx + "_" + firstArg;
}
// replace global api calls to specialized (g_0_18)
// call g[0](18,....)
estraverse.replace($script, {
    enter: function (call, _) {
        if (!(call.type === "CallExpression"
            && call.arguments.length
            && call.arguments[0].type === "Literal"
            && typeof call.arguments[0].value === "number")) {
            return;
        }
        var callee = call.callee;
        if (callee.type === "MemberExpression"
            && callee.object.type === "Identifier"
            && callee.computed
            && ~globalApis.indexOf(callee.object.name)
            && callee.property.type === "Literal"
            && typeof callee.property.value === "number") {
            callee.computed = false;
            var obfArg = call.arguments[0].value;
            return {
                type: "CallExpression",
                arguments: call.arguments.slice(1),
                callee: {
                    type: "Identifier",
                    name: getApiName(callee.object.name, callee.property.value, obfArg)
                }
            };
        }
    }
});
// call g[0].bind(, null, 18,....) || g[0].call(this, null, 18,....)
estraverse.replace($script, {
    enter: function (call, _) {
        if (!(call.type === "CallExpression"
            && call.arguments.length >= 2
            // && call.arguments[0].type === "Literal"
            && call.arguments[1].type === "Literal"
            // && call.arguments[0].value == null
            && typeof call.arguments[1].value === "number")) {
            return;
        }
        var callee = call.callee;
        if (callee.type !== "MemberExpression" || callee.object.type !== "MemberExpression") {
            return;
        }
        var deepestMember = callee.object;
        if (deepestMember.object.type === "Identifier"
            && deepestMember.property.type === "Literal"
            && typeof deepestMember.property.value === "number"
            && ~globalApis.indexOf(deepestMember.object.name)
            && deepestMember.computed
            && callee.property.type === "Identifier"
            && (callee.property.name === "bind" || callee.property.name === "call")) {
            var obfArg = call.arguments[1].value;
            return {
                type: "CallExpression",
                arguments: __spreadArray([
                    call.arguments[0]
                ], call.arguments.slice(2)),
                callee: {
                    type: "MemberExpression",
                    object: {
                        type: "Identifier",
                        name: getApiName(deepestMember.object.name, deepestMember.property.value, obfArg)
                    },
                    property: {
                        type: "Identifier",
                        name: callee.property.name
                    }
                }
            };
        }
    }
});
var generatedApiFunctionNames = [];
// generate global api functions with patched call signature: remove the 'D' arg and create it as variable with predefined value
estraverse.replace($script, {
    enter: function (node, parent) {
        var _a;
        if (!parent || parent.type !== "BlockStatement") {
            return;
        }
        if (node.type === "VariableDeclaration"
            && node.declarations.length === 1
            && node.declarations[0].type === "VariableDeclarator") {
            var decl = node.declarations[0];
            if (decl.init
                && decl.id.type === "Identifier"
                && decl.id.name in globalApiCallStats
                && decl.init.type === "ArrayExpression"
                && decl.init.elements.every(function (e) { return e.type === "FunctionExpression"; })) {
                var generatedFunctions = [];
                var stats = globalApiCallStats[decl.id.name];
                for (var k in stats) {
                    if (!stats.hasOwnProperty(k)) {
                        continue;
                    }
                    var targetFnExpr = decl.init.elements[+k];
                    if (!targetFnExpr) {
                        continue;
                    }
                    var entry = stats[k];
                    var _loop_4 = function (firstArg) {
                        var fnExpr = JSON.parse(JSON.stringify(targetFnExpr));
                        var sourceParams = fnExpr.params.slice();
                        var sourceBody = fnExpr.body;
                        var possibleParamsCount = Math.max.apply(null, entry[firstArg]);
                        var varNamesToInject = sourceParams.slice(possibleParamsCount).map(function (p) { return p.name; });
                        var varsToInject = varNamesToInject.map(function (name) { return ({
                            type: "VariableDeclaration",
                            kind: "var",
                            declarations: [
                                {
                                    type: "VariableDeclarator",
                                    id: {
                                        type: "Identifier",
                                        name: name
                                    }
                                }
                            ]
                        }); });
                        var obfParamName = sourceParams[0].name;
                        varsToInject.splice(0, 0, {
                            type: "VariableDeclaration",
                            kind: "var",
                            declarations: [
                                {
                                    type: "VariableDeclarator",
                                    id: {
                                        type: "Identifier",
                                        name: obfParamName
                                    },
                                    init: {
                                        type: "Literal",
                                        value: +firstArg
                                    }
                                }
                            ]
                        });
                        var apiName = getApiName(decl.id.name, +k, +firstArg);
                        var generatedFn = {
                            type: "FunctionDeclaration",
                            id: {
                                type: "Identifier",
                                name: apiName
                            },
                            params: sourceParams.slice(1, possibleParamsCount),
                            body: {
                                type: "BlockStatement",
                                body: __spreadArray(__spreadArray([], varsToInject), sourceBody.body)
                            }
                        };
                        var fnBody = generatedFn.body.body;
                        var _loop_5 = function (bidx) {
                            // break;
                            var ifNode = fnBody[bidx];
                            if (ifNode.type !== "IfStatement" || ifNode.alternate) {
                                return out_bidx_1 = bidx, "continue";
                            }
                            var simple = false;
                            estraverse.traverse(ifNode.test, {
                                enter: function (childNode, parent) {
                                    simple = childNode.type === "Literal" || childNode.type === "Identifier" && childNode.name === obfParamName;
                                }
                            });
                            estraverse.replace(ifNode.test, {
                                enter: function (childNode, parent) {
                                    if (childNode.type !== "Identifier" || childNode.name !== obfParamName) {
                                        return;
                                    }
                                    return {
                                        type: "Literal",
                                        value: +firstArg
                                    };
                                }
                            });
                            if (!simple) {
                                return out_bidx_1 = bidx, "continue";
                            }
                            var alwaysTrue = false;
                            try {
                                var evalScript = escodegen.generate(ifNode.test);
                                alwaysTrue = eval(evalScript);
                            }
                            catch (_b) {
                                alwaysTrue = null;
                            }
                            if (alwaysTrue == null) {
                                return out_bidx_1 = bidx, "continue";
                            }
                            if (alwaysTrue) {
                                fnBody.splice.apply(fnBody, __spreadArray([bidx, 1], ifNode.consequent.body));
                            }
                            else {
                                fnBody.splice(bidx, 1);
                            }
                            bidx--;
                            out_bidx_1 = bidx;
                        };
                        var out_bidx_1;
                        for (var bidx = 0; bidx < fnBody.length; bidx++) {
                            _loop_5(bidx);
                            bidx = out_bidx_1;
                        }
                        generatedFunctions.push(generatedFn);
                        generatedApiFunctionNames.push(apiName);
                    };
                    for (var firstArg in entry) {
                        _loop_4(firstArg);
                    }
                }
                (_a = parent.body).push.apply(_a, generatedFunctions);
            }
        }
    }
});
// move function declaration to end of block
estraverse.replace($script, {
    enter: function (node, parent) {
        if (node.type !== "BlockStatement") {
            return;
        }
        var fns = node.body.filter(function (_) { return _.type === "FunctionDeclaration"; });
        var rest = node.body.filter(function (_) { return _.type !== "FunctionDeclaration"; });
        node.body = __spreadArray(__spreadArray([], rest), fns);
    }
});
estraverse.replace($script, {
    enter: function (node, parent) {
    }
});
function processUnaryExpr(expr, toAppend) {
    switch (expr.argument.type) {
        case "SequenceExpression":
            expr.argument = simplifySequenceExpr(expr.argument, toAppend);
            break;
        case "BinaryExpression":
            processBinaryExpression(expr.argument, toAppend);
            break;
        case "LogicalExpression":
            processLogicalExpr(expr.argument, toAppend);
            break;
        case "MemberExpression":
            processMemberExpr(expr.argument, toAppend);
            break;
        case "CallExpression":
            processCallExpr(expr.argument, toAppend);
            break;
        case "AssignmentExpression":
            var varName = {
                type: "Identifier",
                name: "var_" + globalVarCounter++
            };
            var variable = {
                type: "VariableDeclaration",
                kind: "var",
                declarations: [
                    {
                        type: "VariableDeclarator",
                        init: expr.argument,
                        id: varName
                    }
                ]
            };
            toAppend.push(variable);
            expr.argument = varName;
            break;
    }
}
function processInlineExpression(expr, toAppend, replaceHandler) {
    switch (expr.type) {
        case "CallExpression":
            processCallExpr(expr, toAppend);
            break;
        case "SequenceExpression":
            replaceHandler(simplifySequenceExpr(expr, toAppend));
            break;
        case "UnaryExpression":
            processUnaryExpr(expr, toAppend);
            break;
        case "BinaryExpression":
            processBinaryExpression(expr, toAppend);
            break;
        case "MemberExpression":
            processMemberExpr(expr, toAppend);
            break;
        case "AssignmentExpression":
            processAssignmentExpressionInExpressionStmt(expr, toAppend);
            break;
        case "LogicalExpression":
            processLogicalExpr(expr, toAppend);
            break;
        case "NewExpression":
            processNewExpr(expr, toAppend);
            break;
    }
}
function processLogicalExpr(logical, toAppend) {
    if (logical.operator === "&&") {
        var left = logical.left;
        processInlineExpression(left, toAppend, function (r) { return logical.left = r; });
        // processInlineExpression(logical.right, toAppend, r => logical.right = r)
        //
        // if (logical.right.type === "SequenceExpression") {
        //   logical.right = simplifySequenceExpr(logical.right, toAppend);
        // }
        //
        //
        // const left = logical.left;
        // processInlineExpression(left, toAppend, r => logical.left = r);
    }
    else if (logical.operator === "||") {
        processInlineExpression(logical.left, toAppend, function (r) { return logical.left = r; });
        // if (logical.left.type === "SequenceExpression") {
        //   logical.left = simplifySequenceExpr(logical.left, toAppend);
        // } else if (logical.left.type === "AssignmentExpression") {
        //   processAssignmentExpressionInExpressionStmt(logical.left, toAppend);
        // } else if (logical.left.type === "BinaryExpression") {
        //   processBinaryExpression(logical.left, toAppend);
        // }
    }
}
function processObjectExpr(expr, toAppend) {
    for (var _i = 0, _a = expr.properties; _i < _a.length; _i++) {
        var prop = _a[_i];
        if (prop.type === "Property") {
            if (prop.value.type === "SequenceExpression") {
                prop.value = simplifySequenceExpr(prop.value, toAppend);
            }
        }
        else {
            debugger;
            throw new Error("Only Property supported for processing of ObjectExpression");
        }
    }
}
function splitReturnSeqStatementToExprsArray(ret) {
    var seq = ret.argument;
    var leadingExpressions = seq.expressions.slice(0, -1).map(function (e) { return ({
        type: "ExpressionStatement",
        expression: e
    }); });
    var lastExpr = distillateReturnExpressions(seq.expressions[seq.expressions.length - 1]);
    leadingExpressions.push(lastExpr);
    return leadingExpressions;
    function distillateReturnExpressions(inExpr) {
        if (inExpr.type === "SequenceExpression") {
            leadingExpressions.push.apply(leadingExpressions, inExpr.expressions.slice(0, -1).map(function (e) { return ({
                type: "ExpressionStatement",
                expression: e
            }); }));
            return distillateReturnExpressions(inExpr[inExpr.expressions.length - 1]);
        }
        return {
            type: "ReturnStatement",
            argument: inExpr
        };
    }
}
function simplifySequenceExpr(seq, toAppend) {
    for (var _i = 0, _a = seq.expressions.slice(0, -1); _i < _a.length; _i++) {
        var expr = _a[_i];
        if (expr.type === "LogicalExpression") {
            var ifExpr = convertLogicalExpressionToIfStatement(expr);
            toAppend.push(ifExpr);
        }
        else {
            toAppend.push({
                type: "ExpressionStatement",
                expression: expr
            });
        }
    }
    return seq.expressions.slice(-1)[0];
}
function processMemberExpr(callee, toAppend) {
    if (callee.property.type === "SequenceExpression") {
        callee.property = simplifySequenceExpr(callee.property, toAppend);
    }
    if (callee.object.type === "MemberExpression") {
        // callee = callee.object;
        processMemberExpr(callee.object, toAppend);
        // continue;
    }
    if (callee.property.type === "MemberExpression") {
        // callee = callee.object;
        processMemberExpr(callee.property, toAppend);
        // continue;
    }
    if (callee.object.type === "CallExpression") {
        processCallExpr(callee.object, toAppend);
    }
    if (callee.object.type === "SequenceExpression") {
        callee.object = simplifySequenceExpr(callee.object, toAppend);
    }
}
function canArgumentBeConvertedToBlockScopeVar(arg) {
    return arg.type === "CallExpression"
        || arg.type === "LogicalExpression"
        || arg.type === "NewExpression"
        || arg.type === "FunctionExpression"
        || arg.type === "ArrayExpression"
        || arg.type === "ConditionalExpression"
        || arg.type === "ObjectExpression"
        || arg.type === "BinaryExpression";
}
function processCallExpr(call, toAppend) {
    var callee = call.callee;
    if (callee.type === "MemberExpression") {
        processMemberExpr(callee, toAppend);
    }
    else if (callee.type === "SequenceExpression") {
        call.callee = simplifySequenceExpr(callee, toAppend);
    }
    for (var idx = 0; idx < call.arguments.length; idx++) {
        var arg = call.arguments[idx];
        // const id = convertArgToStatementIfNotSimple(arg, toAppend);
        // if (id) {
        //   call.arguments[idx] = id;
        // }
        if (arg.type === "SequenceExpression") {
            call.arguments[idx] = simplifySequenceExpr(arg, toAppend);
        }
        else if (arg.type === "MemberExpression") {
            processMemberExpr(arg, toAppend);
        }
        else if (canArgumentBeConvertedToBlockScopeVar(arg)) {
            var id = convertArgToStatementIfNotSimple(arg, toAppend);
            if (id) {
                call.arguments[idx] = id;
            }
        }
    }
}
function processIfStatementInBlock(curr, toAppend) {
    var test = curr.test;
    processInlineExpression(test, toAppend, function (r) { return curr.test = r; });
}
function processBinaryExpression(node, toAppend) {
    deepProcessSequenceInBinaryExpression(node, toAppend);
    var handlers = {
        "CallExpression": processCallExpr,
        "MemberExpression": processMemberExpr,
        "BinaryExpression": processBinaryExpression,
    };
    for (var _i = 0, _a = [node.left, node.right]; _i < _a.length; _i++) {
        var side = _a[_i];
        var handler = handlers[side.type];
        if (handler) {
            handler(side, toAppend);
        }
    }
    function deepProcessSequenceInBinaryExpression(expr, toAppend) {
        var sides = ["right", "left"];
        for (var _i = 0, sides_1 = sides; _i < sides_1.length; _i++) {
            var side = sides_1[_i];
            if (expr[side].type === "BinaryExpression") {
                var bin = expr[side];
                processSequences(bin);
            }
        }
        processSequences(expr);
        function processSequences(node) {
            for (var _i = 0, sides_2 = sides; _i < sides_2.length; _i++) {
                var childSide = sides_2[_i];
                if (node[childSide].type === "SequenceExpression") {
                    node[childSide] = simplifySequenceExpr(node[childSide], toAppend);
                }
            }
        }
    }
    /*
      function processDeepestBinaryExpression(bin: ESTree.BinaryExpression, toAppend: ESTree.Node[]): void {
        const bins = [bin.left, bin.right].filter(e => e.type === "BinaryExpression") as ESTree.BinaryExpression[];
        for (const b of bins) {
          if (b.right.type === "BinaryExpression") {
            processDeepestBinaryExpression(b.right, toAppend);
          }
          if (b.left.type === "BinaryExpression") {
            processDeepestBinaryExpression(b.left, toAppend);
          }
  
        }
  
        deepProcessSequenceInBinaryExpression(bin, toAppend);
      }
  
      function processDeepestMemberExpression(bin: ESTree.BinaryExpression, toAppend: ESTree.Statement[]): void {
        const bins = [bin.left, bin.right].filter(e => e.type === "BinaryExpression") as ESTree.BinaryExpression[];
        for (const b of bins) {
          processBinaryExpression(b, toAppend);
        }
  
        processChildMemberExpr(bin);
  
        function processChildMemberExpr(expr: ESTree.BinaryExpression) {
          if (expr.right.type === "MemberExpression") {
            processMemberExpr(expr.right, toAppend);
          }
          if (expr.left.type === "MemberExpression") {
            processMemberExpr(expr.left, toAppend);
          }
        }
      }*/
}
function convertLogicalExpressionToIfStatement(expr) {
    var test;
    if (expr.operator === "&&") {
        test = expr.left;
    }
    else if (expr.operator === "||") {
        test = {
            type: "UnaryExpression",
            operator: "!",
            prefix: true,
            argument: expr.left
        };
    }
    else {
        throw new Error("Operator \"" + expr.operator + "\" not supported in conversion from LogicalExpression to IfStatement yet.");
    }
    return {
        type: "IfStatement",
        test: test,
        consequent: {
            type: "BlockStatement",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: expr.right
                }
            ]
        }
    };
}
function toExpressionStatements(seq, startIdx, endIdx) {
    return seq.expressions.slice(startIdx, endIdx).map(function (e) { return ({
        type: "ExpressionStatement",
        expression: e
    }); });
}
function convertArgToStatementIfNotSimple(arg, toAppend) {
    if (arg.type !== "Literal" && arg.type !== "Identifier") {
        var id = {
            type: "Identifier",
            name: "arg_" + globalArgsCounter++
        };
        var varDecl = {
            type: "VariableDeclaration",
            declarations: [
                {
                    type: "VariableDeclarator",
                    init: arg,
                    id: id
                }
            ],
            kind: "var"
        };
        toAppend.push(varDecl);
        return id;
    }
}
function processNewExpr(newExpr, toAppend) {
    for (var aIdx = 0; aIdx < newExpr.arguments.length; aIdx++) {
        var arg = newExpr.arguments[aIdx];
        var id = convertArgToStatementIfNotSimple(arg, toAppend);
        if (id) {
            newExpr.arguments[aIdx] = id;
        }
        //
        // if (arg.type === "SequenceExpression") {
        //   newExpr.arguments[aIdx] = simplifySequenceExpr(arg, toAppend);
        // }
    }
    if (newExpr.callee.type === "SequenceExpression") {
        newExpr.callee = simplifySequenceExpr(newExpr.callee, toAppend);
    }
}
function processArrayExpr(arrayExpr, toAppend) {
    for (var i = 0; i < arrayExpr.elements.length; i++) {
        var e = arrayExpr.elements[i];
        if (e.type === "SequenceExpression") {
            arrayExpr.elements[i] = simplifySequenceExpr(e, toAppend);
        }
        else if (e.type === "CallExpression") {
            processCallExpr(e, toAppend);
        }
        else if (e.type === "MemberExpression") {
            processMemberExpr(e, toAppend);
        }
    }
}
function processCondExpr(cond, toAppend) {
    if (cond.test.type === "CallExpression") {
        processCallExpr(cond.test, toAppend);
        // if (cond.test.callee.type === "MemberExpression") {
        //   const seq = cond.test.callee.object;
        //   if (seq.type === "SequenceExpression") {
        //     cond.test.callee.object = seq.expressions.slice(-1)[0];
        //     toAppend.push(...toExpressionStatements(seq, 0, -1));
        //   }
        // }
    }
    else if (cond.test.type === "BinaryExpression") {
        processBinaryExpression(cond.test, toAppend);
    }
    else if (cond.test.type === "SequenceExpression") {
        cond.test = simplifySequenceExpr(cond.test, toAppend);
    } /* else if (cond.test.type === "LogicalExpression") {
      processLogicalExpr(cond.test, toAppend);
    }*/
    if (cond.consequent.type === "SequenceExpression") {
        cond.consequent = simplifySequenceExpr(cond.consequent, toAppend);
    }
}
function processAssignmentExpressionInExpressionStmt(assignment, toAppend) {
    function processRightMember() {
        if (assignment.right.type === "ConditionalExpression") {
            var cond = assignment.right;
            processCondExpr(cond, toAppend);
        }
        if (assignment.right.type === "NewExpression") {
            var newExpr = assignment.right;
            processNewExpr(newExpr, toAppend);
        }
        if (assignment.right.type === "CallExpression") {
            processCallExpr(assignment.right, toAppend);
            // const callee = assignment.right.callee;
            // processCallExpr(assignment.right, toAppend);
            // if (callee.type === "MemberExpression" && callee.property.type === "SequenceExpression") {
            //   toAppend.push(...toExpressionStatements(callee.property, 0, -1))
            //   callee.property = callee.property.expressions.slice(-1)[0];
            // }
        }
        if (assignment.right.type === "MemberExpression") {
            processMemberExpr(assignment.right, toAppend);
        }
        if (assignment.right.type === "SequenceExpression") {
            assignment.right = simplifySequenceExpr(assignment.right, toAppend);
        }
        if (assignment.right.type === "ArrayExpression") {
            var arrayExpr = assignment.right;
            processArrayExpr(arrayExpr, toAppend);
        }
        if (assignment.right.type === "BinaryExpression") {
            processBinaryExpression(assignment.right, toAppend);
        }
        if (assignment.right.type === "UnaryExpression") {
            processUnaryExpr(assignment.right, toAppend);
        }
        if (assignment.right.type === "ObjectExpression") {
            processObjectExpr(assignment.right, toAppend);
        }
    }
    if (assignment.right.type === "AssignmentExpression") {
        processAssignmentExpressionInExpressionStmt(assignment.right, toAppend);
    }
    if (assignment.left.type === "MemberExpression") {
        processMemberExpr(assignment.left, toAppend);
    }
    processRightMember();
}
var deobfuscated = escodegen.generate($script);
fs.writeFileSync(outputFile, deobfuscated, { encoding: "utf8" });
