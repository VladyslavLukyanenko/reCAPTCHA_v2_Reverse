export class Dv {
  S;
  constructor() {
    k_43_7.call(this);
  }
  get() {
    return this.S;
  };

  static io: Dv = void 0;
  static ot = function () {
    var var_7 = null;
    if (this.io) {
      var_7 = this.io;
    } else {
      var_7 = this.io = new Dv();
    }
    return var_7;
  };
}
function k_43_7(Q, n) {
  this.S = null;
}