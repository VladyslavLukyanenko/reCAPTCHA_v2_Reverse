import {e} from "./e";
import {W} from "./W";

export class sH {
  constructor(D) {
    p_18_36.call(this, D);
    B_31_27(this, W);
  }
}
function p_18_36(Q, n, J) {
  e(this, Q, 0, -1, null, null);
}
function B_31_27(Q, n) {
  var l;
  l = function () {
  };
  l.prototype = n.prototype;
  Q.T = n.prototype;
  Q.prototype = new l();
  Q.prototype.constructor = Q;
  Q.mG = function (E, N, a) {
    var v = Array(arguments.length - 2), X = 2;
    for (; X < arguments.length; X++) {
      v[X - 2] = arguments[X];
    }
    var var_54 = n.prototype[N].apply(E, v);
    return var_54;
  };
}