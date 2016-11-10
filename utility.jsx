 export const pipe = (...funcs) =>
  (value) => funcs.reduce((v, fn) => fn(v), value);

 const parseInteg = (x) => parseInt(x);
 // const getId      = (x) => 
