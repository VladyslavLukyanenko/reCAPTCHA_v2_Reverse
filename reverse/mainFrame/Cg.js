"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cg = void 0;
const initialState_1 = require("./initialState");
function Cg(D, Q) {
    var n, J, M = 1;
    for (; M < arguments.length; M++) {
        for (J in (n = arguments[M], n))
            D[J] = n[J];
        var O = 0;
        ;
        for (; O < initialState_1.vj.length; O++) {
            J = initialState_1.vj[O];
            if (Object.prototype.hasOwnProperty.call(n, J)) {
                D[J] = n[J];
            }
        }
    }
}
exports.Cg = Cg;
//# sourceMappingURL=Cg.js.map