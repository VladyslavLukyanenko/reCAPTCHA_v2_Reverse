export class HV {
  S: () => HV;
  $o: () => any;
  zH: (_: any) => void;
  B: any;
  constructor(D, Q, n) {
    m_21_2.call(this, n, D, Q);
  }
}
function m_21_2(Q: HV, n, J, M, O) {
  this.S = function () {
    return Q;
  };
  this.$o = function () {
    return J;
  };
  this.zH = function (T) {
    T[n - 1] = p_47_26(Q);
  };
}
function p_47_26(Q: HV) {
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
function p_47_28(Q: HV) {
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
function p_47_18(Q: HV) {
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