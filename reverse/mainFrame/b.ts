export class b {
  constructor(public height: number, public width: number) {
  }
  round() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    var var_663 = this;
    return var_663;
  }
  floor() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    var var_662 = this;
    return var_662;
  }
  ceil() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    var var_661 = this;
    return var_661;
  }
  aspectRatio() {
    var var_658 = this.width / this.height;
    return var_658;
  }
}