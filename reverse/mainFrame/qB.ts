import { db } from "./db";
import {K} from "./initialState";
import {px} from "./px";

export class qB {
  I;
  S: db;
  G: boolean;
  B;

  constructor(D?, Q?) {
    p_32_4.call(this, D, Q);
  }
  toString(D, Q, n, J, M, O, x, G) {
    if (this.I) {
      return this.I;
    }
    n = [];
    if (!this.S) {
      return '';
    }
    J = this.S.wo();
    D = 0;
    for (; D < J.length; D++) {
      x = J[D];
      var arg_1390 = String(x);
      O = encodeURIComponent(arg_1390);
      M = this.AE(x);
      Q = 0;
      for (; Q < M.length; Q++) {
        G = O;
        if ('' !== M[Q]) {
          var arg_1391 = String(M[Q]);
          G += '=' + encodeURIComponent(arg_1391);
        }
        n.push(G);
      }
    }
    var var_639 = this.I = n.join('&');
    return var_639;
  }
  add(D, Q, n?, J?) {
    B_5_10(1, this);
    this.I = null;
    D = k_28_3(this, D);
    var var_635 = n = this.S.get(D);
    if (!var_635) {
      this.S.set(D, n = []);
    }
    n.push(Q);
    this.B = this.B + 1;
    var var_636 = this;
    return var_636;
  }
  get(D, Q, n) {
    if (!D) {
      return Q;
    }
    var var_637 = null;
    n = this.AE(D);
    if (0 < n.length) {
      var_637 = String(n[0]);
    } else {
      var_637 = Q;
    }
    return var_637;
  };
  set(D, Q, n) {
    B_5_42(1, this);
    this.I = null;
    D = k_28_35(this, D);
    if (k_13_37(1, D, this)) {
      this.B = this.B - this.S.get(D).length;
    }
    var arg_1389 = [Q];
    this.S.set(D, arg_1389);
    this.B = this.B + 1;
    var var_638 = this;
    return var_638;
  };
  AE(D, Q?, n?, J?, M?) {
    B_5_50(1, this);
    n = [];
    if ('string' === typeof D) {
      if (k_13_24(1, D, this)) {
        var arg_1393 = k_28_27(this, D);
        var arg_1392 = this.S.get(arg_1393);
        n = px(n, arg_1392);
      }
    } else {
      Q = this.S.AE();
      J = 0;
      for (; J < Q.length; J++) {
        n = px(n, Q[J]);
      }
    }
    return n;
  };
  D(D) {
    var Q = 0;;
    for (; Q < arguments.length; Q++) {
      m_40_8(0, '', arg_1396, arguments[Q], this);
      function arg_1396(n, J) {
        this.add(J, n);
      }
    }
  };
  forEach(D, Q) {
    B_5_2(1, this);
    this.S.forEach(arg_1394, this);
    function arg_1394(n, J) {
      K(n, arg_1395, this);
      function arg_1395(M) {
        D.call(Q, M, J, this);
      }
    }
  };
  wo(D, Q, n, J, M, O) {
    B_5_58(1, this);
    n = this.S.AE();
    M = [];
    J = this.S.wo();
    Q = 0;
    for (; Q < J.length; Q++) {
      D = n[Q];
      O = 0;
      for (; O < D.length; O++) {
        M.push(J[Q]);
      }
    }
    return M;
  };
}
function B_5_58(Q, n) {
  if (!(1 != ((58 ^ 275) & 7) || n.S)) {
    n.S = new db();
    n.B = 0;
    if (n.I) {
      B_30_4('=', Q, ' ', null, arg_250, n.I);
      function arg_250(O, x) {
        var arg_252 = O.replace(/\+/g, ' ');
        var arg_251 = decodeURIComponent(arg_252);
        n.add(arg_251, x);
      }
    }
  }
}
function m_40_8(Q, n, J, M, O) {
  var x;
  var G;
  var z;
  var T;
  var t;
  var l;
  var r;
  if (M.forEach && typeof M.forEach == 'function') {
    M.forEach(J, O);
  } else {
    if (m_48_56('array', M) || 'string' === typeof M) {
      K(M, J, O);
    } else {
      if (M.wo && typeof M.wo == 'function') {
        t = M.wo();
      } else {
        if (M.AE && typeof M.AE == 'function') {
          t = void 0;
        } else {
          if (m_48_46('array', M) || 'string' === typeof M) {
            T = M.length;
            r = Q;
            x = [];
            for (; r < T; r++) {
              x.push(r);
            }
            t = x;
          } else {
            t = L_19_69(Q, M);
          }
        }
      }
      z = k_17_1(n, Q, 'array', M);
      G = z.length;
      l = Q;
      for (; l < G; l++) {
        var arg_863 = t && t[l];
        J.call(O, z[l], arg_863, M);
      }
    }
  }
}
function k_17_1(Q, n, J, M) {
  var O;
  var x;
  var G;
  var T;
  if (M.AE && 'function' == typeof M.AE) {
    T = M.AE();
  } else {
    if ('string' === typeof M) {
      T = M.split(Q);
    } else {
      if (m_48_26(J, M)) {
        O = [];
        x = n;
        G = M.length;
        for (; x < G; x++) {
          O.push(M[x]);
        }
        T = O;
      } else {
        T = m_42_5(0, M);
      }
    }
  }
  return T;
}
function m_42_5(Q, n) {
  var J;
  var M;
  var O;
  var G;
  for (J in (O = (M = [], Q), n))
    M[O++] = n[J];
  G = M;
  return G;
}
function m_48_26(Q, n) {
  var J;
  var M;
  var r;
  M = typeof n;
  if ('object' != M) {
    J = M;
  } else {
    if (n) {
      if (Array.isArray(n)) {
        J = 'array';
      } else {
        J = M;
      }
    } else {
      J = 'null';
    }
  }
  var var_201 = J == Q || 'object' == J && 'number' == typeof n.length;
  r = var_201;
  return r;
}
function L_19_69(Q, n) {
  var J;
  var M;
  var O;
  var x;
  for (O in (M = (J = Q, []), n))
    M[J++] = O;
  x = M;
  return x;
}
function m_48_46(Q, n) {
  var J;
  var M;
  var r;
  M = typeof n;
  if ('object' != M) {
    J = M;
  } else {
    if (n) {
      if (Array.isArray(n)) {
        J = 'array';
      } else {
        J = M;
      }
    } else {
      J = 'null';
    }
  }
  var var_201 = J == Q || 'object' == J && 'number' == typeof n.length;
  r = var_201;
  return r;
}
function m_48_56(Q, n) {
  var J;
  var M;
  var r;
  M = typeof n;
  if ('object' != M) {
    J = M;
  } else {
    if (n) {
      if (Array.isArray(n)) {
        J = 'array';
      } else {
        J = M;
      }
    } else {
      J = 'null';
    }
  }
  var var_201 = J == Q || 'object' == J && 'number' == typeof n.length;
  r = var_201;
  return r;
}
function B_5_2(Q, n) {
  var J;
  if (!(1 != ((2 ^ 275) & 7) || n.S)) {
    n.S = new db();
    n.B = 0;
    if (n.I) {
      B_30_4('=', Q, ' ', null, arg_250, n.I);
      function arg_250(O, x) {
        var arg_252 = O.replace(/\+/g, ' ');
        var arg_251 = decodeURIComponent(arg_252);
        n.add(arg_251, x);
      }
    }
  }
  return J;
}
function k_13_24(Q, n, J: qB) {
  var z;
  B_5_18(Q, J);
  n = k_28_19(J, n);
  z = m_9_27(n, J.S.B);
  return z;
}
function B_5_50(Q: number, n: qB) {
  var J;
  if (!(1 != ((50 ^ 275) & 7) || n.S)) {
    n.S = new db();
    n.B = 0;
    if (n.I) {
      B_30_4('=', Q, ' ', null, arg_250, n.I);
      function arg_250(O, x) {
        var arg_252 = O.replace(/\+/g, ' ');
        var arg_251 = decodeURIComponent(arg_252);
        n.add(arg_251, x);
      }
    }
  }
  return J;
}
function k_28_27(Q, n) {
  var J;
  var z;
  J = String(n);
  if (Q.G) {
    J = J.toLowerCase();
  }
  z = J;
  return z;
}
function B_5_42(Q, n) {
  if (!(1 != ((42 ^ 275) & 7) || n.S)) {
    n.S = new db();
    n.B = 0;
    if (n.I) {
      B_30_4('=', Q, ' ', null, arg_250, n.I);
      function arg_250(O, x) {
        var arg_252 = O.replace(/\+/g, ' ');
        var arg_251 = decodeURIComponent(arg_252);
        n.add(arg_251, x);
      }
    }
  }
}
function B_5_18(Q, n) {
  if (!(1 != ((18 ^ 275) & 7) || n.S)) {
    n.S = new db();
    n.B = 0;
    if (n.I) {
      B_30_4('=', Q, ' ', null, arg_250, n.I);
      function arg_250(O, x) {
        var arg_252 = O.replace(/\+/g, ' ');
        var arg_251 = decodeURIComponent(arg_252);
        n.add(arg_251, x);
      }
    }
  }
}
function m_9_27(Q, n) {
  var N;
  N = Object.prototype.hasOwnProperty.call(n, Q);
  return N;
}
function k_28_19(Q, n) {
  var J;
  var z;
  J = String(n);
  if (Q.G) {
    J = J.toLowerCase();
  }
  z = J;
  return z;
}
function k_13_37(Q, n, J) {
  var z;
  B_5_18(Q, J);
  n = k_28_19(J, n);
  z = m_9_27(n, J.S.B);
  return z;
}
function k_28_35(Q, n) {
  var J;
  var z;
  J = String(n);
  if (Q.G) {
    J = J.toLowerCase();
  }
  z = J;
  return z;
}
function p_32_4(Q, n, J, M) {
  var var_138 = Q || null;
  this.I = var_138;
  this.S = null;
  this.G = !!n;
  this.B = null;
}
function B_5_10(Q, n) {
  if (!(1 != ((10 ^ 275) & 7) || n.S)) {
    n.S = new db();
    n.B = 0;
    if (n.I) {
      B_30_4('=', Q, ' ', null, arg_250, n.I);
      function arg_250(O, x) {
        var arg_252 = O.replace(/\+/g, ' ');
        var arg_251 = decodeURIComponent(arg_252);
        n.add(arg_251, x);
      }
    }
  }
}
function B_30_4(Q, n, J, M, O, x) {
  var G;
  var z;
  var T;
  var t;
  var l;
  if (!((4 ^ 70) % 6) && x) {
    l = x.split('&');
    z = 0;
    for (; z < l.length; z++) {
      T = l[z].indexOf(Q);
      G = M;
      if (0 <= T) {
        t = l[z].substring(0, T);
        var arg_351 = T + n;
        G = l[z].substring(arg_351);
      } else {
        t = l[z];
      }
      var arg_350 = null;
      if (G) {
        var arg_352 = G.replace(/\+/g, J);
        arg_350 = decodeURIComponent(arg_352);
      } else {
        arg_350 = '';
      }
      O(t, arg_350);
    }
  }
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