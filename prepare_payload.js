var U = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "_",
    "."
];
var FP = U;
var OH = " parent component";
var VC = 32;
var t0 = [3, 6, 4, 11];
var result = prepare_payload(4, "B", 192, 4, "o2ck6g57qdba", '{"B":"iVBORw0KGgBQWUPZm9aZ2EXYGUBFlxlF9XDBOmtsWmQcBdEENVtHtYHYJbnRYAFwBdXkLcUEDdJBOUBi15UwBZhzvUGWIZONCzm+3BBE1YMVAUBVxXuZstZ1NNnb9MBYWN3MAtl4uWVu2VudQB7tZu0fNYTvRvSAhxRbhlBC8riT2tqZXkPl9/2+xqlb3QBZN990ll0clFvcElIVO+l3ABbGtb/2e9Q59EBbG9hYXbgb7IBdbtcymNlRe1Ub3VTasxxkQB7cR3aW425QBWwykD5PObhIBP5EdhcP7oeRlJABY/83d2wSZ3XOaSUBbRLW72Nu10fHVOH3KnZXc3QBHq7WXNA0BaGExHTFNcPeG/Wh3sAB9z/vrUToZyVRBaTduZUsuFLiQ7wB9XkfZQvLKN8BR2iD0G8BdKtwBHxB1k6oBTSI8II0QXmUB4MzB7hfABZuKLR8XbX2ll5QBcLcWZwBcUO7pLORBWLhpvu1KpWruA3QBhPpz6ujhtgBbHLidPJtOs97ItGr2DRVBamlkZmXOmd","S":891184}');
console.log(result);
function prepare_payload(_, Q, n, J, M, O) {
    var arg_2419_133 = g18(15, n, O);
    var arg_2419_152 = M.toString();
    var arg_2419_119 = B47(17, 17, arg_2419_133, arg_2419_152, OH);
    return k33(31, J, arg_2419_119, Q);
}
function k33(D, Q, n, J, M, O, x, G) {
    if (!((D - 1) % 10)) {
        x = J + g14(4, 6, n, Q);
    }
    return x;
}
function g14(D, Q, n, J, M, O, x, G, z, T, t, l, r, U, E, N, a, v, X) {
    t = [];
    if (void 0 === J) {
        J = 0;
    }
    // L48(23, '', 0);
    U = FP;
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
        t.push(U[T], U[z], U[x] || '', U[O] || '');
    }
    v = t.join('');
    return v;
}
//
// function L48(D, Q, n, J?, M?, O?, x?, G?, z?, T?, t?) {
//   T = [
//     6,
//     7,
//     11
//   ];
//   if (!FP) {
//     z = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
//     FP = {};
//     M = [
//       '+/=',
//       '+/',
//       '-_=',
//       '-_.',
//       '-_'
//     ];
//     x = n;
//     for (; 5 > x; x++) {
//       var arg_3711_233 = M[x].split(Q);
//       G = z.concat(arg_3711_233);
//       YC[x] = G;
//       J = n;
//       for (; J < G.length; J++) {
//         O = G[J];
//         if (void 0 === FP[O]) {
//           FP[O] = J;
//         }
//       }
//     }
//   }
//
//   return t;
// }
function B47(D, Q, n, J, M, O, x, G, z) {
    z = [
        2,
        7,
        0
    ];
    // if (1 == (D - 7 & 11)) {
    //   G = 'g-recaptcha-response' + (n ? Q + n : '');
    // }
    // if (!((D ^ 804) % 7)) {
    //   J = [
    //     'waf',
    //     100000,
    //     null
    //   ];
    //   var arg_1116_71 = Q;
    //   this.S = new u$(arg_1116_71);
    //   M = window.___grecaptcha_cfg;
    //   this.id = this.S.get(b$) ? 100000 + M.isolated_count++ : M.count++;
    //   this.Yo = this.yv = n;
    //   if (this.S.has(WV)) {
    //     var arg_1118_34 = this.S.get(WV);
    //     O = p[13](4, 1, arg_1118_34);
    //     if (!O) {
    //       throw Error('The bind parameter must be an element or id');
    //     }
    //     this.Yo = O;
    //   }
    //   this.I = null;
    //   this.G = 0;
    //   this.B = null;
    //   this.D = p[38](14);
    //   k[15](2, 'waf', true, this, 1);
    // }
    // if (!(D >> 2 & 15)) {
    //   G = document;
    // }
    if (!((D - 5) % 12)) {
        x = m13(10, Q, 255, J + M, VC);
        function arg_1123_112(T, t) {
            var var_1124_19 = x[t % x.length];
            return var_1124_19;
        }
        O = n.map(arg_1123_112);
        G = L14(17, 0, n, O);
    }
    return G;
}
function L14(D, Q, n, J, M, O, x, G, z) {
    O = Q;
    z = [];
    for (; O < n.length; O++) {
        z.push(n[O] ^ J[O]);
    }
    return z;
}
function g18(D, Q, n, J, M, O, x, G, z, T) {
    z = [
        128,
        2,
        18
    ];
    // if (!((D + 5) % 8)) {
    //   n = Q.zq;
    //   M = Q.Bb;
    //   J = [
    //     '</div>',
    //     'rc-anchor-invisible-hover',
    //     1
    //   ];
    //   O = Q.dW;
    //   T = c('<div class="' + g[1](18, 'rc-anchor') + ' ' + g[1](50, 'rc-anchor-invisible') + ' ' + g[1](18, O) + '  ' + (M == 1 || M == 2 ? g[1](66, 'rc-anchor-invisible-hover') : g[1](18, 'rc-anchor-invisible-nohover')) + '">' + k[42](13, Q.eW) + k[26](9) + (M == 1 != n ? B[23](7, '8.0', '</div>', Q) + B[6](1, '</div>', ' ', Q) : B[6](2, '</div>', ' ', Q) + B[23](9, '8.0', '</div>', Q)) + '</div>');
    // }
    if (!((D | 8) % 5)) {
        x = [];
        J = [
            240,
            1023,
            64512
        ];
        M = O = 0;
        for (; O < n.length; O++) {
            G = n.charCodeAt(O);
            if (G < 128) {
                x[M++] = G;
            }
            else {
                if (2048 > G) {
                    x[M++] = G >> 6 | Q;
                }
                else {
                    if (55296 == (G & 64512) && O + 1 < n.length && 56320 == (n.charCodeAt(O + 1) & 64512)) {
                        G = 65536 + ((G & 1023) << 10) + (n.charCodeAt(++O) & 1023);
                        x[M++] = G >> 18 | 240;
                        x[M++] = G >> 12 & 63 | 128;
                    }
                    else {
                        x[M++] = G >> 12 | 224;
                    }
                    x[M++] = G >> 6 & 63 | 128;
                }
                x[M++] = G & 63 | 128;
            }
        }
        T = x;
    }
    return T;
}
function m13(D, Q, n, J, M, O, x, G, z, T, t) {
    t = [
        8,
        2,
        1
    ];
    // if (!((D - 1) % 13 || k[32](24, '', this))) {
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
        var arg_1984_183 = Math.min((G + 1) * 12, J.length);
        var arg_1984_162 = J.slice(G * 12, arg_1984_183);
        x = g20(19, 0, 5, 1, 3, arg_1984_162, x);
        var arg_1984_271 = [
            n & x >> 24,
            n & x >> 16,
            n & x >> 8,
            n & x
        ];
        var arg_1984_256 = new Uint8Array(arg_1984_271);
        var arg_1984_246 = k17(30, arg_1984_256);
        z.push.apply(z, arg_1984_246);
    }
    var arg_1985_34 = B27(48, 25, 11, x, Q);
    T = L3(8, 0, arg_1985_34, z).slice(0, M);
    return T;
}
function L3(D, Q, n, J, M, O, x, G, z) {
    if (!((D + 4) % 6)) {
        M = Q;
        for (; M < J.length; M++) {
            x = M + Math.floor(n() * (J.length - M));
            var arg_3217_96 = [
                J[x],
                J[M]
            ];
            O = p12(3, arg_3217_96);
            J[M] = O.next().value;
            J[x] = O.next().value;
        }
        G = J;
    }
    return G;
}
function g20(D, Q, n, J, M, O, x, G, z, T, t, l, r, U) {
    if (!((D - 5) % 14)) {
        G = (void 0 === x ? 0 : x) % t0.length;
        T = t0.slice();
        l = g17(22);
        var arg_292_106 = k17(32, O);
        z = [].concat(arg_292_106);
        t = Q;
        for (; t < z.length; t++) {
            T[G] = ((T[G] << n ^ Math.pow(l.call(z[t], Q) - t0[G], M)) + (T[G] >> M)) / t0[G] | Q;
            G = (G + J) % t0.length;
        }
        function arg_294_32(E, N) {
            var var_295_19 = E ^ N;
            return var_295_19;
        }
        var arg_294_23 = T.reduce(arg_294_32, Q);
        U = Math.abs(arg_294_23);
    }
    return U;
}
function g17(D, Q, n, J, M) {
    if (!((D ^ 314) % 5)) {
        J = 'a-'.charCodeAt;
    }
    return J;
}
function k17(D, Q, n, J, M, O, x, G, z, T) {
    if (Q instanceof Array) {
        O = Q;
    }
    else {
        M = p12(51, Q);
        n = [];
        for (; !(J = M.next()).done;) {
            n.push(J.value);
        }
        O = n;
    }
    T = O;
    return T;
}
function p12(_, Q, n, J, M) {
    if (n = 'undefined' != typeof Symbol && Symbol.iterator && Q[Symbol.iterator]) {
        M = n.call(Q);
    } /* else {
      M = { next: B[49](27, 0, Q) };
    }*/
    return M;
}
function B27(D, Q, n, J, M, O, x, G, z, T, t) {
    if (!((D >> 1) % 12)) {
        O = J;
        t = function () {
            O = (n * O + M) % Q;
            var var_907_40 = O / Q;
            return var_907_40;
        };
    }
    return t;
}

