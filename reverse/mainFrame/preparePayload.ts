import {Mm} from "./mm";
import {Dv} from "./dv";
import {N4} from "./n4";
import {i5} from "./i5";
import {b} from "./b";
import {wg} from "./wg";
import {Fu} from "./Fu";
import {iN} from "./in";
// import {I7} from "./I7";
import {sH} from "./sH";
import {ER} from "./ER";
import {RQ} from "./RQ"
import {HV} from "./HV";
import {u$} from "./u$";
import {$r, AQ, aU, C, CC, cM, eH, f1, FA, fq, g3, gj,
  HQ,
  ja, Kx, NB, nx, OH, QR, Ro, setEH, sR, t0, VC, vj, w, xQ, XU, YC, yC} from "./initialState";
import { B_38_44 } from "./B_38_xx";
import {PV} from "./PV";
import { e } from "./e";
let $Q = [],
  eE = undefined,
  s4 = undefined,
  PM = undefined,
  $0 = undefined;

export function k_21_11(Q, n, J, M, O, x) {
  var G;
  var z;
  var T;
  var t;
  var l;
  var r;
  var U;
  var E;
  var N;

  function arg_982(v, X) {
    if (v.S == 1) {
      T = new Dv();
      var arg_986 = L_37_10(hh, O.S);
      L_1_59(T, arg_986);
      var arg_987 = null;
      if (x.S.has($r)) {
        arg_987 = $r;
      } else {
        arg_987 = NB;
      }
      var arg_985 = m_24_1(x.S, arg_987);
      B_7_11(arg_985, x.yv, T);
      G = function (Z) {
        Z.zH(t);
        var var_231 = Z.$o();
        return var_231;
      };
      U = L_1_42(2000);
      var arg_988 = p_38_30();
      z = Promise.resolve(arg_988);
      E = {gW: 0};
      t = [];
      $Q = [];
      for (; E.gW < HQ.length; E = {gW: E.gW}, E.gW++) {
        var arg_992 = function (Z) {
          function var_232(q) {
            var var_233 = B_38_44(HQ[Z.gW], Ro[Z.gW]).call(x, q, U, Z.gW);
            return var_233;
          }

          return var_232;
        }(E);
        z = z.then(arg_992).then(G);
      }

      function arg_990(Z) {
        var arg_993 = L_1_8(n);
        var var_234 = AQ(Z, arg_993);
        return var_234;
      }

      function arg_991(Z) {
        var arg_994 = L_1_16(n);
        var var_235 = Kx(Z, arg_994);
        return var_235;
      }

      var arg_989 = z.then(arg_990).then(G).then(arg_991).then(G);
      var var_230 = m_20_55(v, arg_989, M);
      return var_230;
    }
    l = new N4(t);
    k_14_10(J, 'HEAD', Q, l);
    r = p_42_33(Q, x.B);
    var arg_984 = p_47_4(l);
    var arg_983 = new i5(r, arg_984);
    var var_229 = v.return(arg_983);
    return var_229;
  }

  N = k_2_39(arg_982);
  return N;
}

function hh(D?) {
  B_35_1.call(this, D);
}

function B_35_1(Q, n, J) {
  e(this, Q, 'conf', -1, yC, null);
}

function Cg(D, Q) {
  var n, J, M = 1;
  ;
  for (; M < arguments.length; M++) {
    for (J in (n = arguments[M], n))
      D[J] = n[J];
    var O = 0;
    ;
    for (; O < vj.length; O++) {
      J = vj[O];
      if (Object.prototype.hasOwnProperty.call(n, J)) {
        D[J] = n[J];
      }
    }
  }
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
  } else {
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
  } else {
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
  } else {
    U = Q;
  }
  return U;
}

function B_6_15(Q, n) {
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
    t = new ER(t, T);
  } else {
    if (t instanceof ER) {
      var var_31 = t.target || T;
      t.target = var_31;
    } else {
      r = t;
      t = new ER(G, T);
      Cg(t, r);
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

function B_6_5(Q, n) {
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
    t = new ER(t, T);
  } else {
    if (t instanceof ER) {
      var var_31 = t.target || T;
      t.target = var_31;
    } else {
      r = t;
      t = new ER(G, T);
      Cg(t, r);
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

function k_37_68(Q, n: any[], J) {
  let M: boolean;
  let O = ja(n, J);
  if (M = O >= 0) {
    Array.prototype.splice.call(n, O, Q);
  }

  return M;
}

function B_42_8(Q, n) {
  /*  var J;
    var M;
    var O;
    var x;
    var G;*/
  n.aD = Q;
  n.listener = null;
  n.S = null;
  n.src = null;
  n.YJ = null;
  /* if (1 == (8 + 5 & 7) && (G = [
     false,
     'nodeName',
     0
   ], ER.call(this, Q ? Q.type : ''), this.relatedTarget = this.B = this.target = null, this.clientX = G[2], this.clientY = G[2], this.screenX = G[2], this.screenY = G[2], this.button = G[2], this.key = '', this.keyCode = G[2], this.ctrlKey = G[0], this.altKey = G[0], this.shiftKey = G[0], this.metaKey = G[0], this.state = null, this.G = G[0], this.pointerId = G[2], this.pointerType = '', this.CL = null, Q))
   {
     x = Q.relatedTarget;
     this.B = n;
     J = this.type = Q.type;
     if (Q.changedTouches && Q.changedTouches.length) {
       O = Q.changedTouches[G[2]];
     } else {
       O = null;
     }
     var var_76 = Q.target || Q.srcElement;
     this.target = var_76;
     if (x) {
       if (sR) {
         a: {
           try {
             i$(x[G[1]]);
             M = true;
             break a;
           } catch (t) {
           }
           M = G[0];
         }
         if (!M) {
           x = null;
         }
       }
     } else {
       if ('mouseover' == J) {
         x = Q.fromElement;
       } else {
         if ('mouseout' == J) {
           x = Q.toElement;
         }
       }
     }
     this.metaKey = Q.metaKey;
     var var_77 = Q.pointerId || G[2];
     this.pointerId = var_77;
     this.state = Q.state;
     this.pointerType = 'string' === typeof Q.pointerType ? Q.pointerType : cV[Q.pointerType] || '';
     this.shiftKey = Q.shiftKey;
     this.CL = Q;
     var var_78 = Q.keyCode || G[2];
     this.keyCode = var_78;
     if (O) {
       this.clientX = void 0 !== O.clientX ? O.clientX : O.pageX;
       this.clientY = void 0 !== O.clientY ? O.clientY : O.pageY;
       var var_80 = O.screenX || G[2];
       this.screenX = var_80;
       var var_81 = O.screenY || G[2];
       this.screenY = var_81;
     } else {
       this.clientX = void 0 !== Q.clientX ? Q.clientX : Q.pageX;
       this.clientY = void 0 !== Q.clientY ? Q.clientY : Q.pageY;
       var var_82 = Q.screenX || G[2];
       this.screenX = var_82;
       var var_83 = Q.screenY || G[2];
       this.screenY = var_83;
     }
     var var_79 = Q.key || '';
     this.key = var_79;
     this.ctrlKey = Q.ctrlKey;
     this.relatedTarget = x;
     this.altKey = Q.altKey;
     this.button = Q.button;
     this.G = w5 ? Q.metaKey : Q.ctrlKey;
     if (Q.defaultPrevented) {
       N6.T.preventDefault.call(this);
     }
   }*/
}

function L_30_10(Q, n, J) {
  if (!((10 >> 1) % 9 || J.Da)) {
    J.Da = Q;
    B_6_15(J, 'complete');
    B_6_5(J, n);
  }
  let M = n.type;
  if (M in J.S && k_37_68(1, J.S[M], n)) {
    B_42_8(true, n);
    if (J.S[M].length == Q) {
      delete J.S[M];
      J.B--;
    }
  }
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
  } else {
    U = Q;
  }
  return U;
}

function p_47_18(Q) {
  var n;
  var J;
  var M;
  var t;
  if (Q.S) {
    for (J in Q.S)
      if (n = Q.S[J], Array.isArray(n))
        for (M = 0; M < n.length; M++)
          n[M] && p_47_28(n[M]);
      else
        n && p_47_18(n);
  }
  t = Q.B;
  return t;
}

function p_47_28(Q) {
  var n;
  var J;
  var M;
  var t;
  if (Q.S) {
    for (J in Q.S)
      if (n = Q.S[J], Array.isArray(n))
        for (M = 0; M < n.length; M++)
          n[M] && p_47_28(n[M]);
      else
        n && p_47_18(n);
  }
  t = Q.B;
  return t;
}

function p_47_4(Q) {
  var n;
  var J;
  var M;
  var t;
  if (Q.S) {
    for (J in Q.S)
      if (n = Q.S[J], Array.isArray(n))
        for (M = 0; M < n.length; M++)
          n[M] && p_47_28(n[M]);
      else
        n && p_47_18(n);
  }
  t = Q.B;
  return t;
}

function m_20_55(Q, n, J) {
  var t;
  Q.S = J;
  t = {value: n};
  return t;
}

function p_42_33(Q, n): b {
  // var J;
  // var M;
  // var v;
  // if (n.P) {
  //   v = L_14_67(n.P);
  // } else {
  //   J = L_49_6(window).width;
  //   if ((M = L_48_8().innerWidth) && M < J) {
  //     J = M;
  //   }
  //   var arg_665 = L_48_9().innerHeight || Q;
  //   var arg_664 = Math.max(L_49_4(window).height, arg_665);
  //   v = new b(arg_664, J);
  // }
  // return v;
  return new b(600, 1920);
}

function k_14_10(Q: number, n: string, J: number, M: N4) {
  var O;
  // O = yR(k_9_70(n)[J]);
  var arg_942 = O || [];
  k_21_23(arg_942, Q, M);
}

function L_1_8(Q) {
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

function L_1_16(Q) {
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

function L_37_10(Q, n) {
  let arg_1258 = n ? JSON.parse(n) : null;
  return new Q(arg_1258);
}

function L_1_59(Q, n) {
  if (void 0 === n) {
    n = new hh();
  } else {
    n = n;
  }
  Q.S = n;
}

function m_24_1(Q: u$, n: RQ) {
  var J;
  var M;
  var G;
  a: {
    if (void 0 === J) {
      J = false;
    } else {
      J = J;
    }
    // if (M = Q.get(n)) {
    //   if ('function' === typeof M) {
    //     G = M;
    //     break a;
    //   }
    //   if ('function' === typeof window[M]) {
    //     G = window[M];
    //     break a;
    //   }
    //   if (J) {
    //     var arg_813 = 'ReCAPTCHA couldn\'t find user-provided function: ' + M;
    //     console.log(arg_813);
    //   }
    // }
    G = function () {
    };
  }
  return G;
}

function B_7_11(Q, n, J) {
  var M;
  eE = Q;
  s4 = J;
  M = k_29_1.bind(null);
  PM = n;
  $0 = M;
}

function k_29_1(Q, n) {
  var z;
  var arg_1043 = FA.keys();
  // @ts-ignore
  z = '' + Array.from(arg_1043);
  return z;
}

function L_1_42(Q) {
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

function p_38_30() {
  var O;
  var arg_642 = 2147483648 * Math.random();
  var arg_644 = 2147483648 * Math.random();
  var arg_643 = Math.floor(arg_644) ^ p_36_45();
  O = Math.floor(arg_642).toString(36) + Math.abs(arg_643).toString(36);
  return O;
}

function p_36_45() {
  return Date.now();
}

function k_2_39(Q) {
  var O;
  var arg_888 = new wg(Q);
  var arg_887 = new iN(arg_888);
  O = p_7_2(arg_887);
  return O;
}