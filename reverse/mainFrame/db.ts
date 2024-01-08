export class db {
  B;
  S: any[];
  I;

  constructor(D?, Q?) {
    this.B = {};
    this.S = []
    this.I = 0;
    var M: number | any[] = arguments.length;
    if (M > 1) {
      if (M % 2) {
        throw Error('Uneven number of arguments');
      }
      var O = 0;
      for (; O < M; O += 2) {
        this.set(arguments[O], arguments[O + 1]);
      }
    } else {
      if (D) {
        if (D instanceof db) {
          M = D.wo();
          O = 0;
          for (; O < M.length; O++) {
            var arg_1362 = D.get(M[O]);
            this.set(M[O], arg_1362);
          }
        } else {
          for (let O in D)
            this.set(O, D[O]);
        }
      }
    }
  }


  set(D, Q) {
    if (!m_9_54(D, this.B)) {
      this.I++;
      this.S.push(D);
    }
    this.B[D] = Q;
  };

  get(D, Q?) {
    var var_628 = null;
    if (m_9_45(D, this.B)) {
      var_628 = this.B[D];
    } else {
      var_628 = Q;
    }
    return var_628;
  };

  forEach(D, Q, n?, J?, M?, O?) {
    J = this.wo();
    n = 0;
    for (; n < J.length; n++) {
      M = J[n];
      O = this.get(M);
      D.call(Q, O, M, this);
    }
  };

  AE(D?, Q?): any[] {
    L_17_25(1, this);
    Q = [];
    D = 0;
    for (; D < this.S.length; D++) {
      Q.push(this.B[this.S[D]]);
    }
    return Q;
  };

  wo(): any[] {
    L_17_59(1, this);
    var var_629 = this.S.concat();
    return var_629;
  };
}
function m_9_45(Q, n) {
  var N;
  N = Object.prototype.hasOwnProperty.call(n, Q);
  return N;
}
function L_17_59(Q, n) {
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
function m_9_54(Q, n) {
  var N;
  N = Object.prototype.hasOwnProperty.call(n, Q);
  return N;
}
function L_17_25(Q, n) {
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
function m_9_18(Q, n) {
  var N;
  N = Object.prototype.hasOwnProperty.call(n, Q);
  return N;
}
function m_9_27(Q, n) {
  var N;
  N = Object.prototype.hasOwnProperty.call(n, Q);
  return N;
}