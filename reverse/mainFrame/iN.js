"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iN = void 0;
const Cg_1 = require("./Cg");
const ER_1 = require("./ER");
const initialState_1 = require("./initialState");
class iN {
    constructor(D) {
        L_3_3.call(this, D);
    }
}
exports.iN = iN;
function L_3_3(Q, n, J) {
    this.next = function (T, t, l) {
        k_13_8(true, Q.A);
        if (Q.A.G) {
            t = k_8_29(false, Q.A.R, T, Q.A.G.next, Q);
        }
        else {
            Q.A.R(T);
            t = L_29_5(false, Q);
        }
        return t;
    };
    this.throw = function (T, t, l) {
        l = [
            1,
            true,
            8
        ];
        k_13_1(true, Q.A);
        if (Q.A.G) {
            t = k_8_13(false, Q.A.R, T, Q.A.G['throw'], Q);
        }
        else {
            g_25_8(T, Q.A);
            t = L_29_30(false, Q);
        }
        return t;
    };
    this.return = function (T) {
        var var_281 = p_19_7('return', Q, T);
        return var_281;
    };
    this[Symbol.iterator] = function () {
        var var_282 = this;
        return var_282;
    };
}
function L_29_30(Q, n) {
    var J;
    var M;
    var t;
    a: {
        for (; n.A.S;) {
            try {
                if (M = n.S(n.A)) {
                    n.A.C = Q;
                    t = {
                        value: M.value,
                        done: false
                    };
                    break a;
                }
            }
            catch (l) {
                n.A.B = void 0;
                g_25_4(l, n.A);
            }
        }
        n.A.C = Q;
        if (n.A.D) {
            J = n.A.D;
            n.A.D = null;
            if (J.RB) {
                throw J.kO;
            }
            t = {
                value: J.return,
                done: true
            };
        }
        else {
            t = {
                value: void 0,
                done: true
            };
        }
    }
    return t;
}
function g_25_8(Q, n) {
    var J;
    var M;
    n.D = {
        kO: Q,
        RB: true
    };
    var var_19 = n.I || n.P;
    n.S = var_19;
    if (!((8 - 7) % 5 || n.Y.width == J.width && n.Y.height == J.height)) {
        n.Y = J;
        if (M) {
            var arg_219 = B_33_7.bind(null);
            m_0_33(n, arg_219);
        }
        B_6_31(n, Q);
    }
}
function k_8_13(Q, n, J, M, O) {
    var x;
    var G;
    var d;
    a: {
        try {
            G = M.call(O.A.G, J);
            if (!(G instanceof Object)) {
                throw new TypeError('Iterator result ' + G + ' is not an object');
            }
            if (!G.done) {
                d = G;
                O.A.C = Q;
                break a;
            }
            x = G.value;
        }
        catch (I) {
            O.A.G = null;
            g_25_16(I, O.A);
            d = L_29_20(false, O);
            break a;
        }
        O.A.G = null;
        n.call(O.A, x);
        d = L_29_25(false, O);
    }
    return d;
}
function k_13_1(Q, n) {
    if (n.C) {
        throw new TypeError('Generator is already running');
    }
    n.C = Q;
}
function L_29_5(Q, n) {
    var J;
    var M;
    var t;
    a: {
        for (; n.A.S;) {
            try {
                if (M = n.S(n.A)) {
                    n.A.C = Q;
                    t = {
                        value: M.value,
                        done: false
                    };
                    break a;
                }
            }
            catch (l) {
                n.A.B = void 0;
                g_25_4(l, n.A);
            }
        }
        n.A.C = Q;
        if (n.A.D) {
            J = n.A.D;
            n.A.D = null;
            if (J.RB) {
                throw J.kO;
            }
            t = {
                value: J.return,
                done: true
            };
        }
        else {
            t = {
                value: void 0,
                done: true
            };
        }
    }
    return t;
}
function p_19_7(Q, n, J) {
    var M;
    var U;
    k_13_3(true, n.A);
    if (M = n.A.G) {
        var arg_514 = null;
        if ('return' in M) {
            arg_514 = M[Q];
        }
        else {
            arg_514 = function (E) {
                var var_119 = {
                    value: E,
                    done: true
                };
                return var_119;
            };
        }
        U = k_8_45(false, n.A.return, J, arg_514, n);
    }
    else {
        n.A.return(J);
        U = L_29_10(false, n);
    }
    return U;
}
function L_29_10(Q, n) {
    var J;
    var M;
    var t;
    a: {
        for (; n.A.S;) {
            try {
                if (M = n.S(n.A)) {
                    n.A.C = Q;
                    t = {
                        value: M.value,
                        done: false
                    };
                    break a;
                }
            }
            catch (l) {
                n.A.B = void 0;
                g_25_4(l, n.A);
            }
        }
        n.A.C = Q;
        if (n.A.D) {
            J = n.A.D;
            n.A.D = null;
            if (J.RB) {
                throw J.kO;
            }
            t = {
                value: J.return,
                done: true
            };
        }
        else {
            t = {
                value: void 0,
                done: true
            };
        }
    }
    return t;
}
function k_8_45(Q, n, J, M, O) {
    var x;
    var G;
    var z;
    var d;
    a: {
        try {
            G = M.call(O.A.G, J);
            if (!(G instanceof Object)) {
                throw new TypeError('Iterator result ' + G + ' is not an object');
            }
            if (!G.done) {
                d = G;
                O.A.C = Q;
                break a;
            }
            x = G.value;
        }
        catch (I) {
            O.A.G = null;
            g_25_16(I, O.A);
            d = L_29_20(false, O);
            break a;
        }
        O.A.G = null;
        n.call(O.A, x);
        d = L_29_25(false, O);
    }
    return d;
}
function k_13_3(Q, n) {
    if (n.C) {
        throw new TypeError('Generator is already running');
    }
    n.C = Q;
}
function k_8_29(Q, n, J, M, O) {
    var x;
    var G;
    var d;
    a: {
        try {
            G = M.call(O.A.G, J);
            if (!(G instanceof Object)) {
                throw new TypeError('Iterator result ' + G + ' is not an object');
            }
            if (!G.done) {
                d = G;
                O.A.C = Q;
                break a;
            }
            x = G.value;
        }
        catch (I) {
            O.A.G = null;
            g_25_16(I, O.A);
            d = L_29_20(false, O);
            break a;
        }
        O.A.G = null;
        n.call(O.A, x);
        d = L_29_25(false, O);
    }
    return d;
}
function L_29_20(Q, n) {
    var J;
    var M;
    var t;
    a: {
        for (; n.A.S;) {
            try {
                if (M = n.S(n.A)) {
                    n.A.C = Q;
                    t = {
                        value: M.value,
                        done: false
                    };
                    break a;
                }
            }
            catch (l) {
                n.A.B = void 0;
                g_25_4(l, n.A);
            }
        }
        n.A.C = Q;
        if (n.A.D) {
            J = n.A.D;
            n.A.D = null;
            if (J.RB) {
                throw J.kO;
            }
            t = {
                value: J.return,
                done: true
            };
        }
        else {
            t = {
                value: void 0,
                done: true
            };
        }
    }
    return t;
}
function k_13_8(Q, n) {
    if (n.C) {
        throw new TypeError('Generator is already running');
    }
    n.C = Q;
}
function L_29_25(Q, n) {
    var J;
    var M;
    var t;
    a: {
        for (; n.A.S;) {
            try {
                if (M = n.S(n.A)) {
                    n.A.C = Q;
                    t = {
                        value: M.value,
                        done: false
                    };
                    break a;
                }
            }
            catch (l) {
                n.A.B = void 0;
                g_25_4(l, n.A);
            }
        }
        n.A.C = Q;
        if (n.A.D) {
            J = n.A.D;
            n.A.D = null;
            if (J.RB) {
                throw J.kO;
            }
            t = {
                value: J.return,
                done: true
            };
        }
        else {
            t = {
                value: void 0,
                done: true
            };
        }
    }
    return t;
}
function g_25_4(Q, n) {
    var J;
    var M;
    n.D = {
        kO: Q,
        RB: true
    };
    var var_19 = n.I || n.P;
    n.S = var_19;
    if (!((4 - 7) % 5 || n.Y.width == J.width && n.Y.height == J.height)) {
        n.Y = J;
        if (M) {
            var arg_219 = B_33_7.bind(null);
            m_0_33(n, arg_219);
        }
        B_6_31(n, Q);
    }
}
function g_25_16(Q, n) {
    var J;
    var M;
    n.D = {
        kO: Q,
        RB: true
    };
    var var_19 = n.I || n.P;
    n.S = var_19;
    if (!((16 - 7) % 5 || n.Y.width == J.width && n.Y.height == J.height)) {
        n.Y = J;
        if (M) {
            var arg_219 = B_33_7.bind(null);
            m_0_33(n, arg_219);
        }
        B_6_31(n, Q);
    }
}
function B_33_7(Q, n) {
    return null;
}
function m_0_33(Q, n) {
    Q.uW.push(n);
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
function B_42_8(Q, n) {
    n.aD = Q;
    n.listener = null;
    n.S = null;
    n.src = null;
    n.YJ = null;
}
//# sourceMappingURL=iN.js.map