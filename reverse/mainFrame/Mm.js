"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mm = void 0;
const Fu_1 = require("./Fu");
const wg_1 = require("./wg");
const iN_1 = require("./iN");
const initialState_1 = require("./initialState");
class Mm {
    constructor() {
        p_8_2.call(this);
    }
    Fw() {
        var var_782 = this.I.Fw();
        return var_782;
    }
}
exports.Mm = Mm;
function p_8_2(Q, n) {
    this.I = new Fu_1.Fu();
    this.B = false;
    this.S = k_27_1.bind(null);
}
function B_29_7() {
    var Q;
    var n;
    var J;
    var M;
    if (void 0 === J) {
        J = 8;
    }
    else {
        J = J;
    }
    Q = [];
    n = 0;
    for (; n < J; n++) {
        var arg_349 = initialState_1.cM() % (initialState_1.aU + 1) ^ k_29_5(initialState_1.aU);
        Q.push(arg_349);
    }
    var arg_348 = g_24_42(36, 1, Q);
    M = k_47_7(8, arg_348);
    return M;
}
function L_25_8(Q, n, J) {
    var M;
    var O;
    var x;
    var G;
    var q;
    O = [];
    M = Q;
    G = Q;
    for (; M < J.length; M++) {
        x = J.charCodeAt(M);
        if (255 < x) {
            O[G++] = x & 255;
            x >>= n;
        }
        O[G++] = x;
    }
    q = O;
    return q;
}
function k_47_7(Q, n) {
    var J;
    var M;
    if (initialState_1.XU && !J) {
        M = initialState_1.C.btoa(n);
    }
    else {
        var arg_1114 = L_25_8(0, Q, n);
        M = g_14_44(6, arg_1114, J);
    }
    return M;
}
function g_14_44(Q, n, J) {
    var M;
    var O;
    var x;
    var G;
    var z;
    var T;
    var t;
    var l;
    var U;
    var E;
    var N;
    var a;
    var v;
    t = [];
    if (void 0 === J) {
        J = 0;
    }
    L_48_23('', 0);
    U = initialState_1.YC[J];
    a = 0;
    for (; a < n.length; a += 3) {
        E = a + 2 < n.length;
        if (l = a + 1 < n.length) {
            N = n[a + 1];
        }
        else {
            N = 0;
        }
        M = n[a];
        if (E) {
            G = n[a + 2];
        }
        else {
            G = 0;
        }
        T = M >> 2;
        x = (N & 15) << 2 | G >> Q;
        z = (M & 3) << 4 | N >> 4;
        O = G & 63;
        if (!E) {
            O = 64;
            if (!l) {
                x = 64;
            }
        }
        var arg_184 = U[x] || '';
        var arg_185 = U[O] || '';
        t.push(U[T], U[z], arg_184, arg_185);
    }
    v = t.join('');
    return v;
}
function L_48_23(Q, n) {
}
function g_24_42(Q, n, J) {
    var M;
    var O;
    var x;
    var z;
    var T;
    var t;
    O = '';
    T = 0;
    for (; T <= J.length / 4 - n; T++) {
        M = (T + n) * 4 - n;
        z = 0;
        x = 0;
        for (; M >= T * 4; M--) {
            x += J[M] << z;
            z += 8;
        }
        O += (x >>> 0).toString(Q);
    }
    t = O;
    return t;
}
function k_29_5(Q) {
    var z;
    var arg_1044 = Math.random() * Q;
    z = Math.floor(arg_1044);
    return z;
}
function k_27_1(Q, n) {
    var H;
    H = k_2_12(arg_1029);
    return H;
    function arg_1029(V, u) {
        Q = B_29_7();
        var arg_1030 = {
            K: 'C' + Q,
            H0: k_9_21(255, 1, Q)
        };
        var var_252 = V.return(arg_1030);
        return var_252;
    }
}
function k_9_21(Q, n, J) {
    var M;
    var x;
    if (void 0 === M) {
        M = 2;
    }
    else {
        M = M;
    }
    var arg_931 = m_13_19(17, Q, J);
    x = g_24_21(36, n, arg_931).slice(0, M);
    return x;
}
function g_24_21(Q, n, J) {
    var M;
    var O;
    var x;
    var z;
    var T;
    var t;
    O = '';
    T = 0;
    for (; T <= J.length / 4 - n; T++) {
        M = (T + n) * 4 - n;
        z = 0;
        x = 0;
        for (; M >= T * 4; M--) {
            x += J[M] << z;
            z += 8;
        }
        O += (x >>> 0).toString(Q);
    }
    t = O;
    return t;
}
function g_17_22() {
    return 'a-'.charCodeAt;
}
function k_17_32(Q) {
    var n;
    var J;
    var M;
    var O;
    var T;
    if (Q instanceof Array) {
        O = Q;
    }
    else {
        M = p_12_51(Q);
        n = [];
        for (; !(J = M.next()).done;) {
            n.push(J.value);
        }
        O = n;
    }
    T = O;
    return T;
}
function p_12_51(Q) {
    var n;
    var J;
    var M;
    if (n = 'undefined' != typeof Symbol && Symbol.iterator && Q[Symbol.iterator]) {
        M = n.call(Q);
    }
    else {
        M = { next: B_49_27(0, Q) };
    }
    return M;
}
function B_49_27(Q, n) {
    var J;
    var G;
    J = Q;
    G = function () {
        var var_93 = null;
        if (J < n.length) {
            var_93 = {
                done: false,
                value: n[J++]
            };
        }
        else {
            var_93 = { done: true };
        }
        return var_93;
    };
    return G;
}
function g_20_19(Q, n, J, M, O, x) {
    var G;
    var z;
    var T;
    var t;
    var l;
    var U;
    G = (void 0 === x ? 0 : x) % initialState_1.t0.length;
    T = initialState_1.t0.slice();
    l = g_17_22();
    var arg_203 = k_17_32(O);
    z = [].concat(arg_203);
    t = Q;
    for (; t < z.length; t++) {
        var arg_206 = l.call(z[t], Q) - initialState_1.t0[G];
        T[G] = ((T[G] << n ^ Math.pow(arg_206, M)) + (T[G] >> M)) / initialState_1.t0[G] | Q;
        G = (G + J) % initialState_1.t0.length;
    }
    var arg_204 = T.reduce(arg_205, Q);
    U = Math.abs(arg_204);
    // if (!((19 ^ 984) % 9 || k_32_25('', this))) {
    //   this.M().value = '';
    //   p_35_14(this.hq, 10, this);
    // }
    return U;
    function arg_205(E, N) {
        var var_16 = E ^ N;
        return var_16;
    }
}
function m_13_19(Q, n, J) {
    var M;
    var x;
    var G;
    var z;
    var T;
    // if (!((19 - 1) % 13 || k_32_24('', this))) {
    //   this.M().value = this.I;
    // }
    if (void 0 === M) {
        M = 4;
    }
    else {
        M = M;
    }
    x = 0;
    G = 0;
    z = [];
    for (; G <= J.length / 12; G++) {
        var arg_751 = G * 12;
        var arg_753 = (G + 1) * 12;
        var arg_752 = Math.min(arg_753, J.length);
        var arg_750 = J.slice(arg_751, arg_752);
        x = g_20_19(0, 5, 1, 3, arg_750, x);
        var arg_756 = [
            n & x >> 24,
            n & x >> 16,
            n & x >> 8,
            n & x
        ];
        var arg_755 = new Uint8Array(arg_756);
        var arg_754 = k_17_30(arg_755);
        z.push.apply(z, arg_754);
    }
    var arg_749 = B_27_48(25, 11, x, Q);
    T = L_3_8(0, arg_749, z).slice(0, M);
    return T;
}
function B_27_48(Q, n, J, M) {
    var O;
    var t;
    O = J;
    t = function () {
        O = (n * O + M) % Q;
        var var_52 = O / Q;
        return var_52;
    };
    return t;
}
function k_17_30(Q) {
    var n;
    var J;
    var M;
    var O;
    var T;
    if (Q instanceof Array) {
        O = Q;
    }
    else {
        M = p_12_51(Q);
        n = [];
        for (; !(J = M.next()).done;) {
            n.push(J.value);
        }
        O = n;
    }
    T = O;
    return T;
}
function k_2_12(Q) {
    var O;
    var arg_888 = new wg_1.wg(Q);
    var arg_887 = new iN_1.iN(arg_888);
    O = p_7_2(arg_887);
    return O;
}
function L_3_8(Q, n, J) {
    var M;
    var O;
    var x;
    var G;
    M = Q;
    for (; M < J.length; M++) {
        var arg_1136 = n() * (J.length - M);
        x = M + Math.floor(arg_1136);
        var arg_1137 = [
            J[x],
            J[M]
        ];
        O = p_12_3(arg_1137);
        J[M] = O.next().value;
        J[x] = O.next().value;
    }
    G = J;
    return G;
}
function p_12_3(Q) {
    var n;
    var M;
    if (n = 'undefined' != typeof Symbol && Symbol.iterator && Q[Symbol.iterator]) {
        M = n.call(Q);
    }
    else {
        M = { next: B_49_27(0, Q) };
    }
    return M;
}
function p_7_2(Q) {
    var O;
    var x;
    var G;
    O = function (z) {
        var var_109 = Q.next(z);
        return var_109;
    };
    x = function (z) {
        var var_110 = Q.throw(z);
        return var_110;
    };
    G = new Promise(arg_480);
    return G;
    function arg_480(z, T) {
        var arg_481 = Q.next();
        t(arg_481);
        function t(l) {
            if (l.done) {
                z(l.value);
            }
            else {
                Promise.resolve(l.value).then(O, x).then(t, T);
            }
        }
    }
}
//# sourceMappingURL=mm.js.map