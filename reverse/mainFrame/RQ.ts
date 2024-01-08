export class RQ {
  B: string;
  Xz: boolean;
  S: string | ((...a: any[]) => any) | boolean;
  fL: string;
  constructor(D: string, Q?: string | ((...a: any[]) => any) | boolean, n?: string, J?: boolean) {
    p_26_4.call(this, D, Q, n, J);
  }
  H() {
    return this.B;
  };
}

function p_26_4(Q: string, n: string | ((...a: any[]) => any) | boolean, J: string, M: boolean, O, x) {
  /*  var G;
  var z;
  var T;
  var t;
  var l;
  var r;
  var U;
  var E;
  var N;
  var a;
if (1 == ((4 ^ 696) & 7) && (T = [
    '0',
    32,
    '&'
  ], O.S.length != M))
  {
    t = k_24_5(0.01, O);
    N = [];
    z = t.search(mp);
    G = M;
    for (; (E = p_13_2(1, 35, n, 6, G, t, z)) >= M;) {
      var arg_589 = t.substring(G, E);
      N.push(arg_589);
      var arg_590 = t.indexOf(T[2], E) + 1 || z;
      G = Math.min(arg_590, z);
    }
    var arg_586 = t.substr(G);
    N.push(arg_586);
    a = N.join('').replace(rg, '$1');
    var arg_587 = O.Da();
    var arg_588 = O.C || T[0];
    a = gg(a, Q, arg_587, 'authuser', arg_588);
    U = M;
    for (; U < J && O.S.length; ++U) {
      var arg_592 = Date.now().toString();
      l = O.S.slice(M, T[1]);
      var arg_593 = g_11_72('object', O.G);
      var arg_591 = k_21_63(arg_592, 4, arg_593);
      r = B_33_5(3, M, arg_591, l);
      if (!x(a, r)) {
        break;
      }
      O.S = O.S.slice(l.length);
    }
  }*/
  this.Xz = void 0 === M ? false : M;
  this.B = Q;
  this.S = void 0 === n ? null : n;
  this.fL = void 0 === J ? null : J;
}