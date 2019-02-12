import * as domqlScan from './domql_scan.js';

export default class Domql {

  constructor(query = null) {
    this._name = 'Domql';
    this.compile(query);
  }

  get name() {
    return this._name;
  }

  get query() {
    return this._query;
  }

  compile(query = null) {
    this._query = query;
    var tokens = domqlScan.scan(query);
  }

  execute() {
    return document.querySelector(this._query);
  }
}
