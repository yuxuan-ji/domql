import {parse as pegjsParse} from './pegjs_parser.js';

/**
 * Parse a query into an Abstract Syntax Tree
 * @param  {String} query
 * @return {Object} the Abstract Syntax Tree
 */
export function parse(query) {
  return pegjsParse(query);
}
