export default class Domql {

  constructor(query = null) {
    this._name = 'Domql';
    this._query = query;
  }

  get name() {
    return this._name;
  }
  get query() {
    return this._query;
  }

  compile(query = null) {
    this._query = query;
  }
  execute() {
    return document.querySelector(this._query);
  }
}
