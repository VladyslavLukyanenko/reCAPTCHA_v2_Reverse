"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I7 = void 0;
const db_1 = require("./db");
const initialState_1 = require("./initialState");
const qB_1 = require("./qB");
class I7 {
    constructor(D, Q, n, J) {
        var var_627 = B_44_15.call(this, D, Q, n, J);
        return var_627;
    }
}
exports.I7 = I7;
function B_44_15(Q, n, J, M, O, x) {
    this.B = '';
    this.R = false;
    this.G = '';
    this.C = '';
    this.S = '';
    this.D = null;
    this.P = '';
    if (Q instanceof I7) {
        this.R = void 0 !== n ? n : Q.R;
        p_31_19('', this, Q.S);
        this.C = Q.C;
        this.G = Q.G;
        g_21_9(null, this, Q.D);
        p_45_48(true, Q.B, this);
        var arg_396 = B_11_9(Q.I);
        B_36_57(this, arg_396);
        L_48_2('%2525', Q.P, this);
    }
    else {
        if (Q && (J = k_45_38(0, String(Q)))) {
            this.R = !!n;
            var arg_397 = J[1] || '';
            p_31_27('', this, arg_397, true);
            var arg_398 = J[2] || '';
            this.C = L_43_28('%2525', arg_398);
            var arg_399 = J[3] || '';
            this.G = L_43_36('%2525', arg_399, true);
            g_21_26(null, this, J[4]);
            var arg_400 = J[5] || '';
            p_45_66(true, arg_400, this, true);
            var arg_401 = J[6] || '';
            B_36_11(this, arg_401, true);
            var arg_402 = J[7] || '';
            L_48_12('%2525', arg_402, this, true);
        }
        else {
            this.R = !!n;
            var arg_403 = this.R;
            this.I = new qB_1.qB(null, arg_403);
        }
    }
}
function L_48_12(Q, n, J, M) {
    var t;
    J.P = M ? L_43_20(Q, n) : n;
    t = J;
    return t;
}
function B_36_11(Q, n, J) {
    var N;
    if (n instanceof qB_1.qB) {
        Q.I = n;
        k_31_1(null, Q.I, Q.R);
    }
    else {
        if (!J) {
            n = m_46_38('%$1', n, initialState_1.YQ);
        }
        var arg_369 = Q.R;
        Q.I = new qB_1.qB(n, arg_369);
    }
    N = Q;
    return N;
}
function m_46_38(Q, n, J) {
    var M;
    var O;
    var T;
    if ('string' === typeof n) {
        var arg_873 = p_27_7.bind(null);
        O = encodeURI(n).replace(J, arg_873);
        if (M) {
            O = O.replace(/%25([0-9a-fA-F]{2})/g, Q);
        }
        T = O;
    }
    else {
        T = null;
    }
    return T;
}
function p_27_7(Q, n) {
    var T;
    n = Q.charCodeAt(0);
    T = '%' + (n >> 4 & 15).toString(16) + (n & 15).toString(16);
    return T;
}
function B_5_26(Q, n) {
    if (!(1 != ((26 ^ 275) & 7) || n.S)) {
        n.S = new db_1.db();
        n.B = 0;
        if (n.I) {
            function arg_250(O, x) {
                var arg_252 = O.replace(/\+/g, ' ');
                var arg_251 = decodeURIComponent(arg_252);
                n.add(arg_251, x);
            }
            B_30_4('=', Q, ' ', null, arg_250, n.I);
        }
    }
}
function B_30_4(Q, n, J, M, O, x) {
    var G;
    var z;
    var T;
    var t;
    var l;
    if ( /*!((4 ^ 70) % 6) && */x) {
        l = x.split('&');
        z = 0;
        for (; z < l.length; z++) {
            T = l[z].indexOf(Q);
            G = M;
            if (0 <= T) {
                t = l[z].substring(0, T);
                var arg_351 = T + n;
                G = l[z].substring(arg_351);
            }
            else {
                t = l[z];
            }
            var arg_350 = null;
            if (G) {
                var arg_352 = G.replace(/\+/g, J);
                arg_350 = decodeURIComponent(arg_352);
            }
            else {
                arg_350 = '';
            }
            O(t, arg_350);
        }
    }
}
function k_31_1(Q, n, J) {
    if (J && !n.G) {
        B_5_26(1, n);
        n.I = Q;
        function arg_1064(l, r, U, E) {
            U = r.toLowerCase();
            if (r != U) {
                B_10_3(null, this, r);
                m_49_5(null, 0, U, l, this);
            }
        }
        n.S.forEach(arg_1064, n);
    }
    n.G = J;
}
function m_49_5(Q, n, J, M, O) {
    B_10_1(null, O, J);
    if (M.length > n) {
        O.I = Q;
        var arg_877 = k_28_3(O, J);
        var arg_878 = k_16_2(n, M);
        O.S.set(arg_877, arg_878);
        O.B = O.B + M.length;
    }
}
function k_16_2(Q, n) {
    var J;
    var M;
    var O;
    var l;
    M = n.length;
    if (M > Q) {
        O = Array(M);
        J = Q;
        for (; J < M; J++) {
            O[J] = n[J];
        }
        l = O;
    }
    else {
        l = [];
    }
    return l;
}
function k_28_3(Q, n) {
    var J;
    var z;
    J = String(n);
    if (Q.G) {
        J = J.toLowerCase();
    }
    z = J;
    return z;
}
function B_10_1(Q, n, J) {
    B_5_34(1, n);
    J = k_28_11(n, J);
    if (m_9_18(J, n.S.B)) {
        n.I = Q;
        n.B = n.B - n.S.get(J).length;
        p_19_28(false, n.S, J);
    }
}
function m_9_45(Q, n) {
    return Object.prototype.hasOwnProperty.call(n, Q);
}
function p_19_28(Q, n, J) {
    var U;
    if (m_9_45(J, n.B)) {
        delete n.B[J];
        n.I--;
        if (n.S.length > 2 * n.I) {
            L_17_14(1, n);
        }
        U = true;
    }
    else {
        U = Q;
    }
    return U;
}
function L_17_14(Q, n) {
    var J;
    var M;
    var O;
    var x;
    if (n.I != n.S.length) {
        M = x = 0;
        for (; x < n.S.length;) {
            J = n.S[x];
            if (m_9_18(J, n.B)) {
                n.S[M++] = J;
            }
            x++;
        }
        n.S.length = M;
    }
    if (n.I != n.S.length) {
        M = 0;
        O = {};
        x = 0;
        for (; x < n.S.length;) {
            J = n.S[x];
            if (!m_9_27(J, O)) {
                n.S[M++] = J;
                O[J] = Q;
            }
            x++;
        }
        n.S.length = M;
    }
}
function m_9_27(Q, n) {
    return Object.prototype.hasOwnProperty.call(n, Q);
}
function m_9_18(Q, n) {
    return Object.prototype.hasOwnProperty.call(n, Q);
}
function k_28_11(Q, n) {
    var J;
    var z;
    J = String(n);
    if (Q.G) {
        J = J.toLowerCase();
    }
    z = J;
    return z;
}
function B_5_34(Q, n) {
    if (!(1 != ((34 ^ 275) & 7) || n.S)) {
        n.S = new db_1.db();
        n.B = 0;
        if (n.I) {
            function arg_250(O, x) {
                var arg_252 = O.replace(/\+/g, ' ');
                var arg_251 = decodeURIComponent(arg_252);
                n.add(arg_251, x);
            }
            B_30_4('=', Q, ' ', null, arg_250, n.I);
        }
    }
}
function B_10_3(Q, n, J) {
    B_5_34(1, n);
    J = k_28_11(n, J);
    if (m_9_18(J, n.S.B)) {
        n.I = Q;
        n.B = n.B - n.S.get(J).length;
        p_19_28(false, n.S, J);
    }
}
function p_45_66(Q, n, J, M) {
    var G;
    J.B = M ? L_43_12('%2525', n, Q) : n;
    G = J;
    return G;
}
function L_43_12(Q, n, J) {
    var T;
    if (n) {
        if (J) {
            var arg_1285 = n.replace(/%25/g, Q);
            T = decodeURI(arg_1285);
        }
        else {
            T = decodeURIComponent(n);
        }
    }
    else {
        T = '';
    }
    return T;
}
function g_21_26(Q, n, J) {
    if (J) {
        J = Number(J);
        if (isNaN(J) || 0 > J) {
            throw Error('Bad port number ' + J);
        }
        n.D = J;
    }
    else {
        n.D = Q;
    }
}
function L_43_36(Q, n, J) {
    var T;
    if (n) {
        if (J) {
            var arg_1285 = n.replace(/%25/g, Q);
            T = decodeURI(arg_1285);
        }
        else {
            T = decodeURIComponent(n);
        }
    }
    else {
        T = '';
    }
    return T;
}
function p_31_19(Q, n, J) {
    var M;
    var x;
    n.S = M ? L_43_4('%2525', J, true) : J;
    if (n.S) {
        n.S = n.S.replace(/:$/, Q);
    }
    x = n;
    return x;
}
function L_43_4(Q, n, J) {
    var T;
    if (n) {
        if (J) {
            var arg_1285 = n.replace(/%25/g, Q);
            T = decodeURI(arg_1285);
        }
        else {
            T = decodeURIComponent(n);
        }
    }
    else {
        T = '';
    }
    return T;
}
function g_21_9(Q, n, J) {
    if (J) {
        J = Number(J);
        if (isNaN(J) || 0 > J) {
            throw Error('Bad port number ' + J);
        }
        n.D = J;
    }
    else {
        n.D = Q;
    }
}
function p_45_48(Q, n, J) {
    var M;
    var G;
    J.B = M ? L_43_12('%2525', n, Q) : n;
    G = J;
    return G;
}
function B_11_9(Q) {
    var n;
    var z;
    var T;
    T = [
        10,
        '"',
        14
    ];
    n = new qB_1.qB();
    n.I = Q.I;
    if (Q.S) {
        var arg_264 = Q.S;
        n.S = new db_1.db(arg_264);
        n.B = Q.B;
    }
    z = n;
    return z;
}
function B_36_57(Q, n) {
    var J;
    var N;
    if (n instanceof qB_1.qB) {
        Q.I = n;
        k_31_1(null, Q.I, Q.R);
    }
    else {
        if (!J) {
            n = m_46_38('%$1', n, initialState_1.YQ);
        }
        var arg_369 = Q.R;
        Q.I = new qB_1.qB(n, arg_369);
    }
    N = Q;
    return N;
}
function L_48_2(Q, n, J) {
    var M;
    var t;
    J.P = M ? L_43_20(Q, n) : n;
    t = J;
    return t;
}
function L_43_20(Q, n) {
    var J;
    var T;
    if (n) {
        if (J) {
            var arg_1285 = n.replace(/%25/g, Q);
            T = decodeURI(arg_1285);
        }
        else {
            T = decodeURIComponent(n);
        }
    }
    else {
        T = '';
    }
    return T;
}
function k_45_38(Q, n) {
    var J;
    var r;
    J = n.match(initialState_1.kw);
    if (initialState_1.vC && [
        'http',
        'https',
        'ws',
        'wss',
        'ftp'
    ].indexOf(J[1]) >= Q) {
        initialState_1.vC(n);
    }
    r = J;
    return r;
}
function p_31_27(Q, n, J, M) {
    var x;
    n.S = M ? L_43_4('%2525', J, true) : J;
    if (n.S) {
        n.S = n.S.replace(/:$/, Q);
    }
    x = n;
    return x;
}
function L_43_28(Q, n) {
    var J;
    var T;
    if (n) {
        if (J) {
            var arg_1285 = n.replace(/%25/g, Q);
            T = decodeURI(arg_1285);
        }
        else {
            T = decodeURIComponent(n);
        }
    }
    else {
        T = '';
    }
    return T;
}
//# sourceMappingURL=I7.js.map