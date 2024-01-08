// import * as ESTree from "estree";
//
// const fs = require("fs");
// const esprima = require("esprima");
// const escodegen = require("escodegen");
// const estraverse = require("estraverse");
//
// const inputFile = "recaptcha__en.js";
// const outputFile = "./deobfuscated.js"
//
// // const inputFile = "./playground.js";
// // const outputFile = "./playground.deobf.js";
//
// var script = fs.readFileSync(inputFile, "utf8");
//
// var $script = esprima.parseScript(script);
//
// // 1. split simple sequence statements (comma separated)
// estraverse.replace($script, {
//   enter: function (node: ESTree.Node, parent) {
//     if (node.type !== "BlockStatement") {
//       return;
//     }
//
//     if (node.body.length !== 1) {
//       return;
//     }
//
//     const expr = node.body[0];
//     if (expr.type !== "ExpressionStatement" || expr.expression.type !== "SequenceExpression") {
//       return;
//     }
//
//     // return {
//     //   type: "Literal", value: "Replaced"
//     // };
//     //
//     return {
//       type: "BlockStatement",
//       body: expr.expression.expressions/**/.map(s => ({
//         type: "ExpressionStatement",
//         expression: s
//       }))
//     }
//   },
// });
//
// // 2. convert comma variable declarations to separate statements
// estraverse.replace($script, {
//   enter: function (node: ESTree.Node, parent?: ESTree.Node) {
//     if (node.type !== "BlockStatement" || node.body.every(n => n.type !== "VariableDeclaration")) {
//       return;
//     }
//     const body = [];
//     for (const c of node.body) {
//       if (c.type === "VariableDeclaration" && c.declarations.length > 1) {
//         body.push(...c.declarations.map(s => ({
//           ...c,
//           declarations: [s]
//         })))
//       } else {
//         body.push(c);
//       }
//     }
//     return {
//       type: "BlockStatement",
//       body
//     };
//   },
// });
//
// // 3. split return sequence
// estraverse.replace($script, {
//   enter: function (node: ESTree.Node, parent?: ESTree.Node) {
//     if (node.type !== "BlockStatement") {
//       return;
//     }
//
//     const returnStmt = node.body[node.body.length - 1] as ESTree.ReturnStatement;
//     if (returnStmt?.type !== "ReturnStatement") {
//       return;
//     }
//
//     if (returnStmt.argument?.type !== "SequenceExpression") {
//       return;
//     }
//
//     const body = splitReturnSeqStatementToExprsArray(returnStmt);
//     return {
//       type: "BlockStatement",
//       body: [
//         ...node.body.slice(0, -1),
//         ...body
//       ]
//     };
//   },
// });
//
// interface TopLvlApiMeta {
//   varName: string;
//   functions: ESTree.Function[]
// }
//
// interface TopLvlApiMethodMeta {
//   idx: number;
//   paramsCount: number;
//   calls: ESTree.CallExpression[]
// }
//
// const fntypes = ["FunctionDeclaration"/*, "FunctionExpression"*//*, "ArrowFunctionExpression"*/];
// estraverse.traverse($script, {
//   enter: (node: ESTree.Node, parent) => {
//     if (fntypes.every(t => node.type !== t)) {
//       return;
//     }
//
// // console.log(JSON.stringify(node))
//   }
// })
//
// type NodeType =
//   "Identifier"
//   | "SimpleLiteral"
//   | "RegExpLiteral"
//   | "BigIntLiteral"
//   | "Program"
//   | "Function"
//   | "SwitchCase"
//   | "CatchClause"
//   | "VariableDeclarator"
//   | "ExpressionStatement"
//   | "BlockStatement"
//   | "EmptyStatement"
//   | "DebuggerStatement"
//   | "WithStatement"
//   | "ReturnStatement"
//   | "LabeledStatement"
//   | "BreakStatement"
//   | "ContinueStatement"
//   | "IfStatement"
//   | "SwitchStatement"
//   | "ThrowStatement"
//   | "TryStatement"
//   | "WhileStatement"
//   | "DoWhileStatement"
//   | "ForStatement"
//   | "ForInStatement"
//   | "ForOfStatement"
//   | "FunctionDeclaration"
//   | "VariableDeclaration"
//   | "ClassDeclaration"
//   | "ThisExpression"
//   | "ArrayExpression"
//   | "ObjectExpression"
//   | "FunctionExpression"
//   | "ArrowFunctionExpression"
//   | "YieldExpression"
//   | "UnaryExpression"
//   | "UpdateExpression"
//   | "BinaryExpression"
//   | "AssignmentExpression"
//   | "LogicalExpression"
//   | "MemberExpression"
//   | "ConditionalExpression"
//   | "SimpleCallExpression"
//   | "NewExpression"
//   | "SequenceExpression"
//   | "TemplateLiteral"
//   | "TaggedTemplateExpression"
//   | "ClassExpression"
//   | "MetaProperty"
//   | "AwaitExpression"
//   | "ImportExpression"
//   | "ChainExpression"
//   | "Property"
//   | "AssignmentProperty"
//   | "Super"
//   | "TemplateElement"
//   | "SpreadElement"
//   | "ObjectPattern"
//   | "ArrayPattern"
//   | "RestElement"
//   | "AssignmentPattern"
//   | "ClassBody"
//   | "MethodDefinition"
//   | "ImportDeclaration"
//   | "ExportNamedDeclaration"
//   | "ExportDefaultDeclaration"
//   | "ExportAllDeclaration"
//   | "ImportSpecifier"
//   | "ImportDefaultSpecifier"
//   | "ImportNamespaceSpecifier"
//   | "ExportSpecifier"
//
// interface BlockNodeProcessor {
//   (curr: ESTree.Node, currIdx: number, appendToBody: ESTree.Node[], block: ESTree.BlockStatement): boolean | void;
// }
//
// interface BlockFlowNormalizersMap {
//   [type: NodeType]: BlockNodeProcessor;
// }
//
// interface BlockStatementProcessors {
//   logicalToIfStatements: any;
//   flowNormalizers: BlockFlowNormalizersMap;
// }
//
// const blockStatementProcessors: BlockStatementProcessors = {
//   logicalToIfStatements: {},
//   flowNormalizers: {
//     ["ExpressionStatement"]: processBlockExprStmt,
//     ["LogicalExpression"]: processBlockLogicalExpr,
//     ["IfStatement"]: processIfStatementInBlock,
//     ["SequenceExpression"]: simplifySequenceExpr
//   }
// };
//
// const flow = blockStatementProcessors.flowNormalizers;
//
// function processBlockLogicalExpr(curr: ESTree.LogicalExpression, idx: number, appendToBody: ESTree.Node[], block: ESTree.BlockStatement) {
//   block.body[idx] = convertLogicalExpressionToIfStatement(curr);
//   idx--;
//   return idx;
// }
//
// function processBlockExprStmt(curr: ESTree.ExpressionStatement, idx: number, appendToBody: ESTree.Node[], block: ESTree.BlockStatement) {
//   if (curr.expression.type === "AssignmentExpression") {
//     processAssignmentExpressionInExpressionStmt(curr, appendToBody);
//   } else if (curr.expression.type === "CallExpression") {
//     const callee = curr.expression.callee;
//     if (callee.type === "MemberExpression") {
//       if (callee.object.type === "SequenceExpression") {
//         const seq = callee.object;
//         callee.object = seq.expressions.slice(-1)[0];
//         appendToBody.push(...toExpressionStatements(seq, 0, -1));
//       }
//     }
//   } else if (curr.expression.type === "LogicalExpression") {
//     return flow["LogicalExpression"](curr.expression, idx, appendToBody, block);
//   } else if (curr.expression.type === "SequenceExpression") {
//     appendToBody.push(...toExpressionStatements(curr.expression, 0, -1));
//     curr.expression = curr.expression.expressions.slice(-1)[0];
//   }
//
//   return idx;
// }
//
// // 4. control flow
// estraverse.replace($script, {
//   enter: function (node: ESTree.Node, parent?: ESTree.Node) {
//
//     if (node.type !== "BlockStatement") {
//       return;
//     }
//
//     // processing if statements.
//     for (let i = 0; i < node.body.length; i++) {
//       const curr = node.body[i];
//       const toAppend: ESTree.Statement[] = [];
//
//       const handler: BlockNodeProcessor = flow[curr.type];
//       if (handler) {
//         const needToMoveBack = handler(curr, i, toAppend, node);
//
//         if (toAppend.length) {
//           node.body.splice(i, 0, ...toAppend);
//         }
//
//         if (needToMoveBack || toAppend.length) {
//           i--;
//         }
//       }
//     }
//   },
// });
//
//
// function splitReturnSeqStatementToExprsArray(ret: ESTree.ReturnStatement): ESTree.Statement[] {
//   const seq = ret.argument as ESTree.SequenceExpression;
//   const leadingExpressions: ESTree.Statement[] = seq.expressions.slice(0, -1).map(e => ({
//     type: "ExpressionStatement",
//     expression: e
//   } as ESTree.ExpressionStatement));
//
//   const lastExpr = distillateReturnExpressions(seq.expressions[seq.expressions.length - 1]);
//
//   leadingExpressions.push(lastExpr);
//
//   return leadingExpressions;
//
//
//   function distillateReturnExpressions(inExpr: ESTree.Expression): ESTree.Statement {
//     if (inExpr.type === "SequenceExpression") {
//       leadingExpressions.push(...inExpr.expressions.slice(0, -1).map(e => ({
//         type: "ExpressionStatement",
//         expression: e
//       } as ESTree.ExpressionStatement)));
//       return distillateReturnExpressions(inExpr[inExpr.expressions.length - 1]);
//     }
//
//     return {
//       type: "ReturnStatement",
//       argument: inExpr
//     };
//   }
// }
//
//
// function processBinaryExpression(expr: ESTree.BinaryExpression, toAppend: ESTree.Node[]): void {
//   const sides = ["right", "left"];
//   for (const side of sides) {
//     if (expr[side].type === "BinaryExpression") {
//       const bin: ESTree.BinaryExpression = expr[side] as ESTree.BinaryExpression;
//       processSequences(bin);
//     }
//   }
//
//   processSequences(expr);
//
//   function processSequences(node: ESTree.BinaryExpression) {
//     for (const childSide of sides) {
//       if (node[childSide].type === "SequenceExpression") {
//         node[childSide] = simplifySequenceExpr(node[childSide], toAppend);
//       }
//     }
//   }
// }
//
// function simplifySequenceExpr(expr: ESTree.SequenceExpression, toAppend: ESTree.Node[]): ESTree.Expression {
//   toAppend.push(...toExpressionStatements(expr, 0, -1));
//   return expr.expressions.slice(-1)[0];
// }
//
// function processDeepestBinaryExpression(bin: ESTree.BinaryExpression, toAppend: ESTree.Node[]): void {
//   const bins = [bin.left, bin.right].filter(e => e.type === "BinaryExpression") as ESTree.BinaryExpression[];
//   for (const b of bins) {
//     if (b.right.type === "BinaryExpression") {
//       processDeepestBinaryExpression(b.right, toAppend);
//     }
//     if (b.left.type === "BinaryExpression") {
//       processDeepestBinaryExpression(b.left, toAppend);
//     }
//
//   }
//
//   processBinaryExpression(bin, toAppend);
// }
//
// function processDeepestMemberExpression(bin: ESTree.BinaryExpression, toAppend: ESTree.Node[]): void {
//   const bins = [bin.left, bin.right].filter(e => e.type === "BinaryExpression") as ESTree.BinaryExpression[];
//   for (const b of bins) {
//     processChildMemberExpr(b);
//   }
//
//   processChildMemberExpr(bin);
//
//   function processChildMemberExpr(expr: ESTree.BinaryExpression) {
//     if (expr.right.type === "MemberExpression") {
//       if (expr.right.object.type === "SequenceExpression") {
//         expr.right.object = simplifySequenceExpr(expr.right.object, toAppend);
//       }
//     }
//     if (expr.left.type === "MemberExpression") {
//       if (expr.left.object.type === "SequenceExpression") {
//         expr.left.object = simplifySequenceExpr(expr.left.object, toAppend);
//       }
//     }
//   }
// }
//
// function processIfStatementInBlock(curr: ESTree.IfStatement, currIdx: number, toAppend: ESTree.Statement[], block: ESTree.BlockStatement) {
//   const test = curr.test;
//
// // simplify call expressions
//   switch (test.type) {
//     case "CallExpression":
//       let callee = test.callee;
//       if (callee.type === "MemberExpression") {
//         while (true) {
//           if (callee.object.type === "MemberExpression") {
//             callee = callee.object;
//             continue;
//           }
//
//           if (callee.object.type === "SequenceExpression") {
//             toAppend.push(...toExpressionStatements(callee.object, 0, -1));
//             callee.object = callee.object.expressions.slice(-1)[0];
//           }
//
//           break;
//         }
//       }
//       break;
//     case "SequenceExpression":
//       toAppend.push(...toExpressionStatements(test, 0, -1)); // wrap all exprs to ExpressionStatement
//       curr.test = test.expressions.slice(-1)[0];
//       break;
//     case "UnaryExpression":
//       if (test.argument.type === "SequenceExpression") {
//         const seq = test.argument.expressions;
//         test.argument = seq.slice(-1)[0];
//
//         for (const expr of seq.slice(0, -1)) {
//           if (expr.type === "LogicalExpression") {
//             if (expr.operator === "&&") {
//               const ifExpr = convertLogicalExpressionToIfStatement(expr);
//               toAppend.push(ifExpr);
//             }
//           } else {
//             toAppend.push({
//               type: "ExpressionStatement",
//               expression: expr
//             });
//           }
//         }
//       } else if (test.argument.type === "BinaryExpression") {
//         processBinaryExpression(test.argument);
//       }
//       break;
//     case "BinaryExpression":
//       processBinaryExpression(test);
//
//
//       break;
//   }
//
//   function processBinaryExpression(node: ESTree.BinaryExpression) {
//     if (node.left.type === "SequenceExpression") {
//       node.left = simplifySequenceExpr(node.left, toAppend);
//     } else if (node.right.type === "SequenceExpression") {
//       node.right = simplifySequenceExpr(node.right, toAppend);
//     } else {
//       processDeepestBinaryExpression(node, toAppend);
//       processDeepestMemberExpression(node, toAppend);
//     }
//   }
// }
//
// function convertLogicalExpressionToIfStatement(expr: ESTree.LogicalExpression): ESTree.IfStatement {
//   let test: ESTree.Expression;
//   if (expr.operator === "&&") {
//     test = expr.left;
//   } else if (expr.operator === "||") {
//     test = {
//       type: "UnaryExpression",
//       operator: "!",
//       prefix: true,
//       argument: expr.left
//     };
//   } else {
//     throw new Error(`Operator "${expr.operator}" not supported in conversion from LogicalExpression to IfStatement yet.`);
//   }
//
//   return {
//     type: "IfStatement",
//     test: test,
//     consequent: {
//       type: "BlockStatement",
//       body: [
//         {
//           type: "ExpressionStatement",
//           expression: expr.right
//         }
//       ]
//     }
//   };
// }
//
// function toExpressionStatements(seq: ESTree.SequenceExpression, startIdx: number, endIdx?: number): ESTree.ExpressionStatement[] {
//   return seq.expressions.slice(startIdx, endIdx).map(e => ({
//     type: "ExpressionStatement",
//     expression: e
//   }));
// }
//
// function processAssignmentExpressionInExpressionStmt(curr: ESTree.ExpressionStatement, toAppend: any[]) {
//   let assignment = curr.expression as ESTree.AssignmentExpression;
//   while (true) {
//     if (assignment.right.type === "AssignmentExpression") {
//       assignment = assignment.right;
//       continue;
//     }
//
//     if (assignment.right.type === "ConditionalExpression") {
//       const cond = assignment.right;
//       if (cond.test.type === "CallExpression") {
//         if (cond.test.callee.type === "MemberExpression") {
//           const seq = cond.test.callee.object;
//           if (seq.type === "SequenceExpression") {
//             cond.test.callee.object = seq.expressions.slice(-1)[0];
//             toAppend.push(...toExpressionStatements(seq, 0, -1));
//           }
//         }
//       }
//     }
//
//     if (assignment.right.type === "NewExpression") {
//       for (let aIdx = 0; aIdx < assignment.right.arguments.length; aIdx++) {
//         const arg = assignment.right.arguments[aIdx];
//         if (arg.type === "SequenceExpression") {
//           assignment.right.arguments[aIdx] = arg.expressions.slice(-1)[0];
//           toAppend.push(...toExpressionStatements(arg, 0, -1));
//         }
//       }
//     }
//
//     if (assignment.right.type === "CallExpression") {
//       const callee = assignment.right.callee;
//       if (callee.type === "MemberExpression" && callee.property.type === "SequenceExpression") {
//         toAppend.push(...toExpressionStatements(callee.property, 0, -1))
//         callee.property = callee.property.expressions.slice(-1)[0];
//       }
//     }
//
//     if (assignment.right.type === "MemberExpression" && assignment.right.property.type === "SequenceExpression") {
//       toAppend.push(...toExpressionStatements(assignment.right.property, 0, -1))
//       assignment.right.property = assignment.right.property.expressions.slice(-1)[0];
//     }
//
//     if (assignment.right.type === "SequenceExpression") {
//       const seq = assignment.right;
//       toAppend.push(...toExpressionStatements(seq, 0, -1));
//       assignment.right = seq.expressions.slice(-1)[0];
//     }
//
//     break;
//   }
// }
//
//
// const deobfuscated = escodegen.generate($script);
// fs.writeFileSync(outputFile, deobfuscated, {encoding: "utf8"})