export class ChainableArray {
  constructor(arr) {
    this.array = arr;
  }

  map(callback) {
    this.array = this.array.map(callback);
    return this;
  }

  filter(callback) {
    this.array = this.array.filter(callback);
    return this;
  }

  reduce(callback, initialValue) {
    this.array = [this.array.reduce(callback, initialValue)];
    return this;
  }

  value() {
    return this.array.length === 1 ? this.array[0] : this.array;
  }
}
