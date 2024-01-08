"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e = void 0;
const initialState_1 = require("./initialState");
function e(D, Q, n, J, M, O) {
    var x, G, z, T, t, l, r, U, E, N, a, v, X, Z, q;
    D.S = null;
    if (!Q) {
        if (n) {
            Q = [n];
        }
        else {
            Q = [];
        }
    }
    D.P = n ? String(n) : void 0;
    D.G = 0 === n ? -1 : 0;
    D.B = Q;
    a: {
        X = D.B.length;
        l = -1;
        if (X && (l = X - 1, a = D.B[l], !(null === a || 'object' != typeof a || Array.isArray(a) || initialState_1.xQ && a instanceof Uint8Array))) {
            D.I = a;
            D.D = l - D.G;
            break a;
        }
        if (-1 < J) {
            var arg_1373 = l + 1 - D.G;
            D.D = Math.max(J, arg_1373);
            D.I = null;
        }
        else {
            D.D = Number.MAX_VALUE;
        }
    }
    D.R = {};
    if (M) {
        G = 0;
        for (; G < M.length; G++) {
            v = M[G];
            if (v < D.D) {
                U = v + D.G;
                var var_617 = D.B[U] || initialState_1.gj;
                D.B[U] = var_617;
            }
            else {
                k_40_37(D);
                var var_618 = D.I[v] || initialState_1.gj;
                D.I[v] = var_618;
            }
        }
    }
    if (O && O.length) {
        G = 0;
        for (; G < O.length; G++) {
            N = void 0;
            z = void 0;
            T = 0;
            t = O[G];
            E = D;
            for (; T < t.length; T++) {
                Z = t[T];
                x = g_25_11(Z, E);
                if (x != null) {
                    z = x;
                    N = Z;
                    k_21_23(void 0, Z, E);
                }
            }
            if (N) {
                k_21_71(z, N, E);
            }
        }
    }
}
exports.e = e;
function k_40_37(Q) {
    var n;
    n = Q.D + Q.G;
    if (!Q.B[n]) {
        Q.I = Q.B[n] = {};
    }
}
function k_21_23(Q, n, J) {
    var N;
    if (n < J.D) {
        J.B[n + J.G] = Q;
    }
    else {
        k_40_1(J);
        J.I[n] = Q;
    }
    N = J;
    return N;
}
function g_25_11(Q, n) {
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
    return x;
}
function k_21_71(Q, n, J) {
    var N;
    if (n < J.D) {
        J.B[n + J.G] = Q;
    }
    else {
        k_40_1(J);
        J.I[n] = Q;
    }
    N = J;
    return N;
}
function k_40_1(Q) {
    var n;
    n = Q.D + Q.G;
    if (!Q.B[n]) {
        Q.I = Q.B[n] = {};
    }
}
//# sourceMappingURL=e.js.map