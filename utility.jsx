 export const pipe = (...funcs) =>
  (value) => funcs.reduce((v, fn) => fn(v), value);
