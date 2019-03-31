export class QueryEngine {

  static getEngine() {
    return QueryEngine._querySelector;
  }

  static setEngine(engine) {
    QueryEngine._querySelector = engine;
  }

  static useDefault() {
    QueryEngine._querySelector = QueryEngine.defaultQuerySelector;
  }

  static defaultQuerySelector(selector) {
    return Array.from(document.querySelectorAll(selector));
  }
}

QueryEngine._querySelector = QueryEngine.defaultQuerySelector;
