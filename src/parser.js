import {parse as pegjsParse} from './pegjs_parser.js';

/**
 * Parser for converting queries into Abstract Syntax trees
 */
export class Parser {
  /**
   * Parse a query into an Abstract Syntax Tree
   * @param  {String} query
   * @return {Object} the Abstract Syntax Tree
   */
  static parse(query) {
    return pegjsParse(query);
  }
}
