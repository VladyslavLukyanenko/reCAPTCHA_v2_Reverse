import {vj} from "./initialState";

export function Cg(D, Q) {
  var n, J, M = 1;
  for (; M < arguments.length; M++) {
    for (J in (n = arguments[M], n))
      D[J] = n[J];
    var O = 0;;
    for (; O < vj.length; O++) {
      J = vj[O];
      if (Object.prototype.hasOwnProperty.call(n, J)) {
        D[J] = n[J];
      }
    }
  }
}