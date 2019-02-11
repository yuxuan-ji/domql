export default class Domql {
  constructor() {
    this._name = 'Domql';
  }
  get name() {
    return this._name;
  }

  select(query) {
    return document.querySelector(query);
  }
}
