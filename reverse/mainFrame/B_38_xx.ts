import {aU, C, cM, eH, f1, fq, g3, OH, setEH, t0, VC, XU, YC} from "./initialState";
import {sH} from "./sH";
import {HV} from "./HV";
import {wg} from "./wg";
import {iN} from "./iN";
import {N4} from "./N4";
import {PV} from "./PV";
import {Mm} from "./Mm";
import {Fu} from "./Fu";

let $Q = [],
  Cf = undefined;

export function B_38_44(Q, n) {
  var J;
  var M;
  var T;
  if (void 0 === J) {
    J = true;
  } else {
    J = J;
  }
  if (void 0 === M) {
    M = L_10_34.bind(null);
  } else {
    M = M;
  }
  T = function (l, r, U, E) {
    var a = [], v = 3;
    for (; v < arguments.length; ++v) {
      a[v - 3] = arguments[v];
    }
    if (void 0 === l) {
      l = B_29_31();
    } else {
      l = l;
    }
    var X;
    var Z;
    var q;
    var d;
    var y;
    var I;
    var P;
    var Y = this;

    function arg_375(H, f, V) {
      if (H.S == 1) {
        var var_68 = Cf || U;
        Cf = var_68;
        var var_69 = r || eH;
        setEH(var_69)
        var arg_377 = m_35_20(5, l);
        q = Math.abs(arg_377);
        var arg_378 = new sH();
        d = B_4_6(2, arg_378, q);
        if (J) {
          function arg_381(u) {
            var arg_382 = k_5_13(4960)();
            var arg_383 = k_5_65(4394)();
            var arg_384 = k_5_52(4264);
            var arg_385 = k_5_65(4203);
            var var_70 = a.unshift(arg_382, arg_383, arg_384, arg_385);
            return var_70;
          }

          g_19_40(0, arg_381);
        }

        function arg_379() {
          var var_71 = Q.apply(Y, a);
          return var_71;
        }

        I = p_2_5('string', 255, 1, null, arg_379, M);
        var arg_380 = I.S(q);
        var var_67 = m_20_31(H, arg_380, 2);
        return var_67;
      }
      y = H.B;
      P = y.H0;
      X = y.K;
      k_21_23(X, 1, d);
      if (void 0 != U && Cf == U) {
        Z = new PV();
        if (eH.Fw() || I.Fw()) {
          k_21_47(2, 1, Z);
        } else {
          if (I.B) {
            k_21_23(3, 1, Z);
          } else {
            k_21_39(1, 1, Z);
          }
        }
        k_21_7(P, 2, Z);
        $Q.push(Z);
        Cf = void 0;
      }
      var arg_376 = new HV(n, P, d);
      var var_66 = H.return(arg_376);
      return var_66;
    }

    var var_65 = k_2_30(arg_375);
    return var_65;
  };
  return T;
}
export function B_38_29(Q, n, J?, M?) {
  var T;
  if (void 0 === J) {
    J = true;
  } else {
    J = J;
  }
  if (void 0 === M) {
    M = L_10_34.bind(null);
  } else {
    M = M;
  }
  T = function (l, r, U, E) {
    var N = [
      31,
      29,
      3
    ], a = [], v = N[2];;
    for (; v < arguments.length; ++v) {
      a[v - N[2]] = arguments[v];
    }
    if (void 0 === l) {
      l = B_29_31();
    } else {
      l = l;
    }
    var X;
    var Z;
    var q;
    var d;
    var y;
    var I;
    var P;
    var Y = this;
    var var_65 = k_2_30(arg_375);
    return var_65;
    function arg_375(H, f, V) {
      if (H.S == 1) {
        var var_68 = Cf || U;
        Cf = var_68;
        var var_69 = r || eH;
        setEH(var_69);
        var arg_377 = m_35_20(5, l);
        q = Math.abs(arg_377);
        var arg_378 = new sH();
        d = B_4_6(2, arg_378, q);
        if (J) {
          g_19_40(0, arg_381);
          function arg_381(u) {
            u = [
              4264,
              5,
              4960
            ];
            var arg_382 = k_5_13(4960)();
            var arg_383 = k_5_65(4394)();
            var arg_384 = k_5_52(4264);
            var arg_385 = k_5_65(4203);
            var var_70 = a.unshift(arg_382, arg_383, arg_384, arg_385);
            return var_70;
          }
        }
        I = p_2_5('string', 255, 1, null, arg_379, M);
        var arg_380 = I.S(q);
        var var_67 = m_20_31(H, arg_380, 2);
        return var_67;
        function arg_379() {
          var var_71 = Q.apply(Y, a);
          return var_71;
        }
      }
      y = H.B;
      P = y.H0;
      X = y.K;
      k_21_23(X, 1, d);
      if (void 0 != U && Cf == U) {
        Z = new PV();
        if (eH.Fw() || I.Fw()) {
          k_21_47(2, 1, Z);
        } else {
          if (I.B) {
            k_21_23(3, 1, Z);
          } else {
            k_21_39(1, 1, Z);
          }
        }
        k_21_7(P, 2, Z);
        $Q.push(Z);
        Cf = void 0;
      }
      var arg_376 = new HV(n, P, d);
      var var_66 = H.return(arg_376);
      return var_66;
    }
  };
  return T;
}
export function B_38_74(Q, n?, J?, M?) {
  var T;
  if (void 0 === J) {
    J = true;
  } else {
    J = J;
  }
  if (void 0 === M) {
    M = L_10_34.bind(null);
  } else {
    M = M;
  }
  T = function (l, r, U, E) {
    var N = [
      31,
      29,
      3
    ], a = [], v = N[2];;
    for (; v < arguments.length; ++v) {
      a[v - N[2]] = arguments[v];
    }
    if (void 0 === l) {
      l = B_29_31();
    } else {
      l = l;
    }
    var X;
    var Z;
    var q;
    var d;
    var y;
    var I;
    var P;
    var Y = this;
    var var_65 = k_2_30(arg_375);
    return var_65;
    function arg_375(H, f, V) {
      if (H.S == 1) {
        var var_68 = Cf || U;
        Cf = var_68;
        var var_69 = r || eH;
        setEH(var_69);
        var arg_377 = m_35_20(5, l);
        q = Math.abs(arg_377);
        var arg_378 = new sH();
        d = B_4_6(2, arg_378, q);
        if (J) {
          g_19_40(0, arg_381);
          function arg_381(u) {
            u = [
              4264,
              5,
              4960
            ];
            var arg_382 = k_5_13(4960)();
            var arg_383 = k_5_65(4394)();
            var arg_384 = k_5_52(4264);
            var arg_385 = k_5_65(4203);
            var var_70 = a.unshift(arg_382, arg_383, arg_384, arg_385);
            return var_70;
          }
        }
        I = p_2_5('string', 255, 1, null, arg_379, M);
        var arg_380 = I.S(q);
        var var_67 = m_20_31(H, arg_380, 2);
        return var_67;
        function arg_379() {
          var var_71 = Q.apply(Y, a);
          return var_71;
        }
      }
      y = H.B;
      P = y.H0;
      X = y.K;
      k_21_23(X, 1, d);
      if (void 0 != U && Cf == U) {
        Z = new PV();
        if (eH.Fw() || I.Fw()) {
          k_21_47(2, 1, Z);
        } else {
          if (I.B) {
            k_21_23(3, 1, Z);
          } else {
            k_21_39(1, 1, Z);
          }
        }
        k_21_7(P, 2, Z);
        $Q.push(Z);
        Cf = void 0;
      }
      var arg_376 = new HV(n, P, d);
      var var_66 = H.return(arg_376);
      return var_66;
    }
  };
  return T;
}

function k_5_52(Q) {
  var n;
  var G;
  n = n = ((Q ^ f1 | 3) >> 5) + f1;
  G = g3[(n % 50 + 50) % 50];
  return G;
}
function k_5_65(Q) {
  var n;
  var G;
  n = n = ((Q ^ f1 | 3) >> 5) + f1;
  G = g3[(n % 50 + 50) % 50];
  return G;
}
function k_5_13(Q) {
  var n;
  var G;
  n = n = ((Q ^ f1 | 3) >> 5) + f1;
  G = g3[(n % 50 + 50) % 50];
  return G;
}
function g_17_11() {
  return 'a-'.charCodeAt;
}

function B_4_6(Q, n, J) {
  var O;
  O = k_21_39(J, Q, n);
  return O;
}

function g_19_40(Q, n) {
  var E;
  try {
    E = n();
  } catch (N) {
    E = Q;
  }
  return E;
}

function m_35_20(Q, n) {
  var J;
  var M;
  var O;
  var x;
  var z;
  J = g_17_11();
  M = 0;
  if (n) {
    O = 0;
    for (; O < n.length; O++) {
      x = J.call(n, O);
      M = (M << Q) - M + x;
      M &= M;
    }
    z = M;
  } else {
    z = M;
  }
  return z;
}

function k_2_39(Q) {
  var O;
  var arg_888 = new wg(Q);
  var arg_887 = new iN(arg_888);
  O = p_7_2(arg_887);
  return O;
}

function m_5_28(Q, n) {
  var O;
  if (n.S()) {
    O = null;
  } else {
    O = Q();
  }
  return O;
}

function m_20_39(Q, n, J) {
  var t;
  Q.S = J;
  t = {value: n};
  return t;
}

function m_20_15(Q, n, J) {
  var t;
  Q.S = J;
  t = {value: n};
  return t;
}
function p_2_5(Q, n, J, M, O, x) {
  var G;
  var z;
  var q;
  G = eH;
  z = new Mm();
  z.S = function (y, I) {
    function arg_438(P, Y, H) {
      switch (P.S) {
        case J: {
          I = M;
          P.I = 2;
          if (z.Fw()) {
            P.S = 4;
            break;
          }
          var arg_439 = m_5_28(O, G);
          var var_96 = m_20_39(P, arg_439, 5);
          return var_96;
        }
        case 5: {
          I = P.B;
          if (I == M) {
            P.S = 4;
            break;
          }
          if (typeof I != Q || I.includes('"') || I.includes('\\')) {
            if ('number' == typeof I) {
              I = '' + I;
            } else {
              function arg_441(f) {
                var var_98 = f.stringify(I);
                return var_98;
              }

              I = m_31_33('none', arg_441);
            }
          } else {
            I = '"' + I + '"';
          }
          var arg_440 = x(I, y);
          var var_97 = m_20_15(P, arg_440, 7);
          return var_97;
        }
        case 7: {
          var arg_442 = {
            K: P.B,
            H0: k_9_5(n, J, I)
          };
          var var_99 = P.return(arg_442);
          return var_99;
        }
        case 4: {
          g_20_14(0, P, 3);
          break;
        }
        case 2: {
          p_21_53(0, P);
          z.B = true;
        }
        case 3: {
          var arg_443 = k_27_2(y);
          var var_100 = P.return(arg_443);
          return var_100;
        }
      }
    }

    var var_95 = k_2_39(arg_438);
    return var_95;
  };
  z.I = L_1_56(200);
  q = z;
  return q;
}

function k_9_5(Q, n, J) {
  var M;
  var x;
  if (void 0 === M) {
    M = 2;
  } else {
    M = M;
  }
  var arg_931 = m_13_19(17, Q, J);
  x = g_24_21(36, n, arg_931).slice(0, M);
  return x;
}

function g_20_14(Q, n, J) {
  n.S = J;
  n.I = Q;
  if (!((14 ^ 984) % 9 || k_32_25('', this))) {
    this.M().value = '';
    p_35_14(this.hq, 10, this);
  }
}
function p_21_53(Q, n) {
  var J;
  var O;
  if (!(((53 ^ 670) & 7) != 2 || this.MJ)) {
    this.MJ = true;
    this.X();
  }
  n.I = Q;
  J = n.D.kO;
  n.D = null;
  O = J;
  return O;
}

function k_2_12(Q) {
  var O;
  var arg_888 = new wg(Q);
  var arg_887 = new iN(arg_888);
  O = p_7_2(arg_887);
  return O;
}

function B_29_7() {
  var Q;
  var n;
  var J;
  var M;
  if (void 0 === J) {
    J = 8;
  } else {
    J = J;
  }
  Q = [];
  n = 0;
  for (; n < J; n++) {
    var arg_349 = cM() % (aU + 1) ^ k_29_5(aU);
    Q.push(arg_349);
  }
  var arg_348 = g_24_42(36, 1, Q);
  M = k_47_7(8, arg_348);
  return M;
}
function m_13_19(Q, n, J) {
  var M;
  var x;
  var G;
  var z;
  var T;
  if (!((19 - 1) % 13 || k_32_24('', this))) {
    this.M().value = this.I;
  }
  if (void 0 === M) {
    M = 4;
  } else {
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
function k_9_21(Q, n, J) {
  var M;
  var x;
  if (void 0 === M) {
    M = 2;
  } else {
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
function k_27_2(Q) {
  var H;

  function arg_1029(V, u) {
    Q = B_29_7();
    var arg_1030 = {
      K: 'C' + Q,
      H0: k_9_21(255, 1, Q)
    };
    var var_252 = V.return(arg_1030);
    return var_252;
  }

  H = k_2_12(arg_1029);
  return H;
}
function m_31_33(_, n) {
  var x;
  // if (k_41_42(0, true, false)) {
  x = n(fq);
  // } else {
  //   function arg_835(G, z, T) {
  //     // @ts-ignore
  //     z = Object.prototype.toJSON;
  //     // @ts-ignore
  //     T = Array.prototype.toJSON;
  //     try {
  //       // @ts-ignore
  //       delete Array.prototype.toJSON;
  //       // @ts-ignore
  //       delete Object.prototype.toJSON;
  //       var var_190 = n(G.JSON);
  //       return var_190;
  //     } finally {
  //       if (T) {
  //         // @ts-ignore
  //         Array.prototype.toJSON = T;
  //       }
  //       if (z) {
  //         // @ts-ignore
  //         Object.prototype.toJSON = z;
  //       }
  //     }
  //   }
  //
  //   x = p_28_4(Q, arg_835);
  // }
  return x;
}
function L_1_56(Q) {
  var n;
  var t;
  if (void 0 === Q) {
    Q = 1000;
  } else {
    Q = Q;
  }
  n = new Fu();
  n.S = function () {
    function arg_1125(r) {
      var var_279 = null;
      var arg_1127 = (cM() - r) / Q;
      if (Math.floor(arg_1127)) {
        n.S = function () {
          return true;
        };
        var_279 = n.S();
      } else {
        var_279 = false;
      }
      return var_279;
    }

    var arg_1126 = cM();
    var var_278 = t6(arg_1125, arg_1126);
    return var_278;
  }();
  t = n;
  return t;
}

function t6(D, _) {
  var n = Array.prototype.slice.call(arguments, 1);

  function var_468() {
    var J = n.slice();
    J.push.apply(J, arguments);
    var var_469 = D.apply(this, J);
    return var_469;
  }

  return var_468;
}
function m_20_31(Q, n, J) {
  var t;
  Q.S = J;
  t = {value: n};
  return t;
}
function k_21_47(Q, n, J) {
  var N;
  if (n < J.D) {
    J.B[n + J.G] = Q;
  } else {
    k_40_1(J);
    J.I[n] = Q;
  }
  N = J;
  return N;
}
function k_21_39(Q, n, J) {
  var N;
  if (n < J.D) {
    J.B[n + J.G] = Q;
  } else {
    k_40_1(J);
    J.I[n] = Q;
  }
  N = J;
  return N;
}
function k_21_23(Q, n, J: N4) {
  var N;
  // if (n < J.D) {
  J.B[n + J.G] = Q;
  // } else {
  //   k_40_1(J);
  //   J.I[n] = Q;
  // }
  N = J;
  return N;
}
function k_40_1(Q) {
  let n = Q.D + Q.G;
  if (!Q.B[n]) {
    Q.I = Q.B[n] = {};
  }
}
function k_21_7(Q, n, J) {
  var N;
  if (n < J.D) {
    J.B[n + J.G] = Q;
  } else {
    k_40_1(J);
    J.I[n] = Q;
  }
  N = J;
  return N;
}
function k_2_30(Q) {
  var O;
  var arg_888 = new wg(Q);
  var arg_887 = new iN(arg_888);
  O = p_7_2(arg_887);
  return O;
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

  function arg_480(z, T) {
    function t(l) {
      if (l.done) {
        z(l.value);
      } else {
        // @ts-ignore
        Promise.resolve(l.value).then(O, x).then(t, T);
      }
    }

    var arg_481 = Q.next();
    t(arg_481);
  }

  // @ts-ignore
  G = new Promise(arg_480);
  return G;
}
function g_18_7(Q, n) {
  var M;
  var O;
  var x;
  var G;
  var T;
  x = [];
  M = O = 0;
  for (; O < n.length; O++) {
    G = n.charCodeAt(O);
    if (G < 128) {
      x[M++] = G;
    } else {
      if (2048 > G) {
        x[M++] = G >> 6 | Q;
      } else {
        if (55296 == (G & 64512) && O + 1 < n.length && 56320 == (n.charCodeAt(O + 1) & 64512)) {
          G = 65536 + ((G & 1023) << 10) + (n.charCodeAt(++O) & 1023);
          x[M++] = G >> 18 | 240;
          x[M++] = G >> 12 & 63 | 128;
        } else {
          x[M++] = G >> 12 | 224;
        }
        x[M++] = G >> 6 & 63 | 128;
      }
      x[M++] = G & 63 | 128;
    }
  }
  T = x;
  return T;
}

function k_32_24(Q, n) {
  var O;
  var var_264 = !!n.M() && n.M().value != Q && n.M().value != n.I;
  O = var_264;
  return O;
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


function g_17_22() {
  return 'a-'.charCodeAt;
}

function createIteratorOf(Q: any[]): Iterator<any> {
  var n;
  var M;
  if (n = 'undefined' != typeof Symbol && Symbol.iterator && Q[Symbol.iterator]) {
    M = n.call(Q);
  } else {
    M = {next: B_49_27(0, Q)};
  }
  return M;
}
function k_17_32(Q) {
  var n;
  var J;
  var M;
  var O;
  var T;
  if (Q instanceof Array) {
    O = Q;
  } else {
    M = createIteratorOf(Q);
    n = [];
    for (; !(J = M.next()).done;) {
      n.push(J.value);
    }
    O = n;
  }
  T = O;
  return T;
}
function g_20_19(Q, n, J, M, O, x) {
  var G;
  var z;
  var T;
  var t;
  var l;
  var U;
  G = (void 0 === x ? 0 : x) % t0.length;
  T = t0.slice();
  l = g_17_22();
  var arg_203 = k_17_32(O);
  z = [].concat(arg_203);
  t = Q;
  for (; t < z.length; t++) {
    var arg_206 = l.call(z[t], Q) - t0[G];
    T[G] = ((T[G] << n ^ Math.pow(arg_206, M)) + (T[G] >> M)) / t0[G] | Q;
    G = (G + J) % t0.length;
  }

  function arg_205(E, N) {
    var var_16 = E ^ N;
    return var_16;
  }

  var arg_204 = T.reduce(arg_205, Q);
  U = Math.abs(arg_204);
  if (!((19 ^ 984) % 9 || k_32_25('', this))) {
    this.M().value = '';
    p_35_14(this.hq, 10, this);
  }
  return U;
}

function F(D, Q, n?) {
  if (Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code')) {
    // @ts-ignore
    F = Kw;
  } else {
    // @ts-ignore
    F = fw;
  }
  var var_549 = F.apply(null, arguments);
  return var_549;
}
function p_35_14(Q, n, J) {
  var O;
  if ('function' === typeof Q) {
    if (J) {
      Q = F(Q, J);
    }
  } else {
    if (Q && 'function' == typeof Q.handleEvent) {
      Q = F(Q.handleEvent, Q);
    } else {
      throw Error('Invalid listener argument');
    }
  }
  if (2147483647 < Number(n)) {
    O = -1;
  } else {
    var arg_632 = n || 0;
    // O = C.setTimeout(Q, arg_632);
  }
  return O;
}

function k_32_25(Q, n) {
  var O;
  var var_264 = !!n.M() && n.M().value != Q && n.M().value != n.I;
  O = var_264;
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
function m_13_10(Q, n, J, M) {
  var x;
  var G;
  var z;
  var T;
  if (!((10 - 1) % 13 || k_32_24('', this))) {
    this.M().value = this.I;
  }
  if (void 0 === M) {
    M = 4;
  } else {
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

function k_17_30(Q) {
  var n;
  var J;
  var M;
  var O;
  var T;
  if (Q instanceof Array) {
    O = Q;
  } else {
    M = createIteratorOf(Q);
    n = [];
    for (; !(J = M.next()).done;) {
      n.push(J.value);
    }
    O = n;
  }
  T = O;
  return T;
}

function B_27_24(Q, n, J, M) {
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
function L_14_17(Q, n, J) {
  var M;
  var O;
  var z;
  O = Q;
  M = [];
  for (; O < n.length; O++) {
    var arg_1175 = n[O] ^ J[O];
    M.push(arg_1175);
  }
  z = M;
  return z;
}
function B_47_29(Q, n, J, M) {
  var O;
  var x;
  var G;
  var arg_411 = J + M;
  x = m_13_10(Q, 255, arg_411, VC);

  function arg_412(T, t) {
    var var_91 = x[t % x.length];
    return var_91;
  }

  O = n.map(arg_412);
  G = L_14_17(0, n, O);
  return G;
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
    } else {
      var_93 = {done: true};
    }
    return var_93;
  };
  return G;
}

function p_12_3(Q) {
  var n;
  var M;
  if (n = 'undefined' != typeof Symbol && Symbol.iterator && Q[Symbol.iterator]) {
    M = n.call(Q);
  } else {
    M = {next: B_49_27(0, Q)};
  }
  return M;
}
function L_3_20(Q, n, J) {
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
function k_33_51(Q, n, J) {
  var x;
  x = J + g_14_4(6, n, Q);
  return x;
}
function g_14_4(Q, n, J) {
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
  noopAfterFPInitialized('', 0);
  U = YC[J];
  a = 0;
  for (; a < n.length; a += 3) {
    E = a + 2 < n.length;
    if (l = a + 1 < n.length) {
      N = n[a + 1];
    } else {
      N = 0;
    }
    M = n[a];
    if (E) {
      G = n[a + 2];
    } else {
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
function k_18_5(Q, n, J, M) {
  var x;
  var E;
  var arg_959 = g_18_7(192, J);
  var arg_960 = M.toString();
  x = B_47_29(17, arg_959, arg_960, OH);
  var arg_962 = B_27_24(75, 23, x.length, n);
  var arg_961 = L_3_20(0, arg_962, x);
  E = k_33_51(4, arg_961, Q);
  return E;
}
function L_10_34(Q, n) {
  var O;
  var arg_1149 = k_18_5('b', 19, Q, n);
  O = Promise.resolve(arg_1149);
  return O;
}

function B_29_31() {
  var D, Q, n, J, M, O;
  if (void 0 === J) {
    J = 8;
  } else {
    J = J;
  }
  Q = [];
  n = 0;
  for (; n < J; n++) {
    var arg_349 = cM() % (aU + 1) ^ k_29_5(aU);
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
  noopAfterFPInitialized('', 0);
  U = YC[J];
  a = 0;
  for (; a < n.length; a += 3) {
    E = a + 2 < n.length;
    if (l = a + 1 < n.length) {
      N = n[a + 1];
    } else {
      N = 0;
    }
    M = n[a];
    if (E) {
      G = n[a + 2];
    } else {
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

function noopAfterFPInitialized(Q, n) {
  // var J;
  // var M;
  // var O;
  // var x;
  // var G;
  // var z;
  // if (/*1 == (23 - 6 & 7) && */!FP) {
  //   z = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
  //   FP = {};
  //   M = [
  //     '+/=',
  //     '+/',
  //     '-_=',
  //     '-_.',
  //     '-_'
  //   ];
  //   x = n;
  //   for (; 5 > x; x++) {
  //     var arg_1300 = M[x].split(Q);
  //     G = z.concat(arg_1300);
  //     YC[x] = G;
  //     J = n;
  //     for (; J < G.length; J++) {
  //       O = G[J];
  //       if (void 0 === FP[O]) {
  //         FP[O] = J;
  //       }
  //     }
  //   }
  // }
}
function k_47_7(Q, n) {
  var J;
  var M;
  if (XU && !J) {
    M = C.btoa(n);
  } else {
    var arg_1114 = L_25_8(0, Q, n);
    M = g_14_44(6, arg_1114, J);
  }
  return M;
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