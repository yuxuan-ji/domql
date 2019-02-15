export function sort(f, arr) {
  arr.sort(f);
  return arr;
}

export function execute(directives) {
  if (!directives || directives.length === 0) return null;
  var result = directives[0];
  for (var i = 1; i < directives.length; i++) {
    result = directives[i](result);
  }
  return result;
}
