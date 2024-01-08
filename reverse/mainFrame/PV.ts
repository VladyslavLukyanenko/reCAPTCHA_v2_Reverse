import { e } from "./e";
import {gj, ja, jE, sR} from "./initialState";
import {ER} from "./ER";
import {Cg} from "./Cg";

export class PV {
  constructor(D?) {
    B_1_8.call(this, D);
  }

  $o() {
    var var_783 = g_25_11(2, this);
    return var_783;
  };
  B8() {
    var var_784 = g_25_59(1, this);
    return var_784;
  };
}
function g_25_59(Q, n) {
  var J;
  var M;
  var x;
  if (Q < n.D) {
    M = Q + n.G;
    J = n.B[M];
    if (J !== gj) {
      x = J;
    } else {
      x = n.B[M] = [];
    }
  } else {
    if (n.I) {
      J = n.I[Q];
      if (J === gj) {
        x = n.I[Q] = [];
      } else {
        x = J;
      }
    }
  }
  if (!((59 - 7) % 5 || n.Y.width == J.width && n.Y.height == J.height)) {
    n.Y = J;
    if (M) {
      var arg_219 = B_33_7.bind(null);
      m_0_33(n, arg_219);
    }
    B_6_31(n, Q);
  }
  return x;
}
function B_1_8(Q, n, J) {
  e(this, Q, 0, -1, jE, null);
  return n;
}
function g_25_11(Q, n) {
  var J;
  var M;
  var x;
  if (Q < n.D) {
    M = Q + n.G;
    J = n.B[M];
    if (J !== gj) {
      x = J;
    } else {
      x = n.B[M] = [];
    }
  } else {
    if (n.I) {
      J = n.I[Q];
      if (J === gj) {
        x = n.I[Q] = [];
      } else {
        x = J;
      }
    }
  }
  if (!((11 - 7) % 5 || n.Y.width == J.width && n.Y.height == J.height)) {
    n.Y = J;
    if (M) {
      var arg_219 = B_33_7.bind(null);
      m_0_33(n, arg_219);
    }
    B_6_31(n, Q);
  }
  return x;
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
function B_33_7(Q, n) {
  var x;
  x = null;
  return x;
}
function p_19_31(Q, n, J, M, O) {
  var D = 31;
  var x;
  var G;
  var z;
  var T;
  var t;
  var l;
  var r;
  var U;
  r = [
    10,
    false,
    13
  ];
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
function k_37_68(Q, n, J) {
  var M;
  var O;
  var x;
  O = ja(n, J);
  if (M = O >= 0) {
    Array.prototype.splice.call(n, O, Q);
  }
  x = M;
  return x;
}
function L_30_10(Q, n, J) {
  var M;
  if (!((10 >> 1) % 9 || J.Da)) {
    J.Da = Q;
    B_6_15(J, 'complete');
    B_6_5(J, n);
  }
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