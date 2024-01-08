"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.u$ = void 0;
const initialState_1 = require("./initialState");
class u$ {
    constructor(D, Q) {
        k_41_12.call(this, D, Q);
    }
    set(D, Q) {
        this.S[D.H()] = Q;
    }
    ;
    has(D) {
        var var_779 = !!this.get(D);
        return var_779;
    }
    ;
    get(D, Q) {
        var var_780 = Q = this.S[D.H()];
        if (!var_780) {
            if (D.S) {
                if ('function' === typeof D.S) {
                    Q = D.S(this);
                }
                else {
                    Q = D.S;
                }
            }
            else {
                Q = null;
            }
        }
        return Q;
    }
    ;
}
exports.u$ = u$;
function k_41_12(Q, n, J, M) {
    this.S = L_20_18(null, Q);
    n = m_1_2(0, this);
    if (0 < n.length) {
        throw Error('Missing required parameters: ' + n.join());
    }
}
function L_19_21(Q, n) {
    var J;
    var M;
    var O;
    var x;
    for (O in (M = (J = Q, []), n))
        M[J++] = O;
    x = M;
    return x;
}
function m_1_2(Q, n) {
    var J;
    var x;
    J = [];
    var arg_697 = L_19_21(Q, initialState_1.xg);
    initialState_1.K(arg_697, arg_698, n);
    x = J;
    return x;
    function arg_698(G) {
        if (initialState_1.xg[G].Xz && !this.has(initialState_1.xg[G])) {
            var arg_699 = initialState_1.xg[G].H();
            J.push(arg_699);
        }
    }
}
function L_20_18(Q, n) {
    var J;
    var M;
    var O;
    M = k_1_5(n);
    J = initialState_1.Lf.H();
    if (!initialState_1.fB.hasOwnProperty(M[J])) {
        M[J] = Q;
    }
    O = M;
    return O;
}
function k_1_5(Q) {
    var n;
    var J;
    var O;
    n = {};
    for (J in Q)
        n[J] = Q[J];
    O = n;
    return O;
}
//# sourceMappingURL=u$.js.map