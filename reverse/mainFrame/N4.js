"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.N4 = void 0;
const e_1 = require("./e");
const initialState_1 = require("./initialState");
const sH_1 = require("./sH");
const W_1 = require("./W");
const ER_1 = require("./ER");
const Cg_1 = require("./Cg");
const BQ = [17]; // possibly it should be initialized in natural way
class N4 {
    constructor(D) {
        k_5_10.call(this, D);
        B_31_39(N4, W_1.W);
    }
    hp() {
        var var_828 = B_0_34(this, 70, sH_1.sH);
        return var_828;
    }
    ;
    fJ() {
        var var_829 = B_0_34(this, 28, sH_1.sH);
        return var_829;
    }
    ;
}
exports.N4 = N4;
function B_0_34(Q, n, J) {
    var M;
    var O;
    if (!Q.S) {
        Q.S = {};
    }
    if (!Q.S[n]) {
        if (M = g_25_19(n, Q)) {
            Q.S[n] = new J(M);
        }
    }
    O = Q.S[n];
    return O;
}
function g_25_19(Q, n) {
    var J;
    var M;
    var x;
    if (Q < n.D) {
        M = Q + n.G;
        J = n.B[M];
        if (J !== initialState_1.gj) {
            x = J;
        }
        else {
            x = n.B[M] = [];
        }
    }
    else {
        if (n.I) {
            J = n.I[Q];
            if (J === initialState_1.gj) {
                x = n.I[Q] = [];
            }
            else {
                x = J;
            }
        }
    }
    if (!((19 - 7) % 5 || n.Y.width == J.width && n.Y.height == J.height)) {
        n.Y = J;
        if (M) {
            var arg_219 = B_33_7.bind(null);
            m_0_33(n, arg_219);
        }
        B_6_31(n, Q);
    }
    return x;
}
function B_6_31(Q, n) {
    var M;
    var O;
    var x;
    var G;
    var z;
    var T;
    var t;
    var l;
    var r;
    var U;
    var E;
    var N;
    if (O = Q.DN) {
        M = 1;
        l = [];
        for (; O; O = O.DN) {
            l.push(O);
            ++M;
        }
    }
    t = n;
    E = l;
    T = Q.Ld;
    var var_30 = t.type || t;
    G = var_30;
    if ('string' === typeof t) {
        t = new ER_1.ER(t, T);
    }
    else {
        if (t instanceof ER_1.ER) {
            var var_31 = t.target || T;
            t.target = var_31;
        }
        else {
            r = t;
            t = new ER_1.ER(G, T);
            Cg_1.Cg(t, r);
        }
    }
    z = true;
    if (E) {
        x = E.length - 1;
        for (; !t.I && x >= 0; x--) {
            U = t.B = E[x];
            var var_32 = p_19_21(true, t, G, true, U) && z;
            z = var_32;
        }
    }
    if (!t.I) {
        U = t.B = T;
        var var_33 = p_19_51(true, t, G, true, U) && z;
        z = var_33;
        if (!t.I) {
            var var_34 = p_19_1(true, t, G, false, U) && z;
            z = var_34;
        }
    }
    if (E) {
        x = 0;
        for (; !t.I && x < E.length; x++) {
            U = t.B = E[x];
            var var_35 = p_19_31(true, t, G, false, U) && z;
            z = var_35;
        }
    }
    N = z;
    return N;
}
function p_19_1(Q, n, J, M, O) {
    var x;
    var G;
    var z;
    var T;
    var t;
    var l;
    var U;
    if (t = O.P.S[String(J)]) {
        z = Q;
        t = t.concat();
        l = 0;
        for (; l < t.length; ++l) {
            if ((G = t[l]) && !G.aD && G.capture == M) {
                var var_121 = G.YJ || G.src;
                x = var_121;
                T = G.listener;
                if (G.xJ) {
                    L_30_10(0, G, O.P);
                }
                var var_122 = false !== T.call(x, n) && z;
                z = var_122;
            }
        }
        var var_120 = z && !n.defaultPrevented;
        U = var_120;
    }
    else {
        U = Q;
    }
    return U;
}
function p_19_51(Q, n, J, M, O) {
    var x;
    var G;
    var z;
    var T;
    var t;
    var l;
    var U;
    if (t = O.P.S[String(J)]) {
        z = Q;
        t = t.concat();
        l = 0;
        for (; l < t.length; ++l) {
            if ((G = t[l]) && !G.aD && G.capture == M) {
                var var_121 = G.YJ || G.src;
                x = var_121;
                T = G.listener;
                if (G.xJ) {
                    L_30_10(0, G, O.P);
                }
                var var_122 = false !== T.call(x, n) && z;
                z = var_122;
            }
        }
        var var_120 = z && !n.defaultPrevented;
        U = var_120;
    }
    else {
        U = Q;
    }
    return U;
}
function p_19_31(Q, n, J, M, O) {
    var x;
    var G;
    var z;
    var T;
    var t;
    var l;
    var U;
    if (t = O.P.S[String(J)]) {
        z = Q;
        t = t.concat();
        l = 0;
        for (; l < t.length; ++l) {
            if ((G = t[l]) && !G.aD && G.capture == M) {
                var var_121 = G.YJ || G.src;
                x = var_121;
                T = G.listener;
                if (G.xJ) {
                    L_30_10(0, G, O.P);
                }
                var var_122 = false !== T.call(x, n) && z;
                z = var_122;
            }
        }
        var var_120 = z && !n.defaultPrevented;
        U = var_120;
    }
    else {
        U = Q;
    }
    return U;
}
function p_19_21(Q, n, J, M, O) {
    var x;
    var G;
    var z;
    var T;
    var t;
    var l;
    var U;
    if (t = O.P.S[String(J)]) {
        z = Q;
        t = t.concat();
        l = 0;
        for (; l < t.length; ++l) {
            if ((G = t[l]) && !G.aD && G.capture == M) {
                var var_121 = G.YJ || G.src;
                x = var_121;
                T = G.listener;
                if (G.xJ) {
                    L_30_10(0, G, O.P);
                }
                var var_122 = false !== T.call(x, n) && z;
                z = var_122;
            }
        }
        var var_120 = z && !n.defaultPrevented;
        U = var_120;
    }
    else {
        U = Q;
    }
    return U;
}
function L_30_10(Q, n, J) {
    var M;
    M = n.type;
    if (M in J.S && k_37_68(1, J.S[M], n)) {
        B_42_8(true, n);
        if (J.S[M].length == Q) {
            delete J.S[M];
            J.B--;
        }
    }
}
function B_42_8(Q, n) {
    n.aD = Q;
    n.listener = null;
    n.S = null;
    n.src = null;
    n.YJ = null;
}
function k_37_68(Q, n, J) {
    var M;
    var O;
    var x;
    O = initialState_1.ja(n, J);
    if (M = O >= 0) {
        Array.prototype.splice.call(n, O, Q);
    }
    x = M;
    return x;
}
function m_0_33(Q, n) {
    Q.uW.push(n);
}
function B_33_7(Q, n) {
    return null;
}
function k_5_10(Q, n, J) {
    e_1.e(this, Q, 0, -1, BQ, null);
}
function B_31_39(Q, n) {
    var l;
    l = function () {
    };
    l.prototype = n.prototype;
    Q.T = n.prototype;
    Q.prototype = new l();
    Q.prototype.constructor = Q;
    Q.mG = function (E, N, a) {
        var v = Array(arguments.length - 2), X = 2;
        ;
        for (; X < arguments.length; X++) {
            v[X - 2] = arguments[X];
        }
        var var_54 = n.prototype[N].apply(E, v);
        return var_54;
    };
}
//# sourceMappingURL=N4.js.map