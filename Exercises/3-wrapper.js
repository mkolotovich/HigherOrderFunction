'use strict';

// const contract = (...f) => {
//   const args = [...f];
//   console.log(args);
//   let type;
//   for (let i = 0; i < args.length; i++) {
//     console.log(typeof args[i]);
//     type = typeof args[i];
//   }
//   return (...args) => {
//     console.log(f[0](...args));
//     return f[0](...args);
//   };
// };
const contract = (fn, ...types) => (...arr) => {
  for (let i = 0; i < types.length - 1; i++) {
    const argType = typeof arr[i];
    const neededArgType = types[i].name.toLowerCase();
    if (argType !== neededArgType) {
      throw new TypeError('Types are different');
    }
  }
  const neededReType = types[types.length - 1].name.toLowerCase();
  const result = fn(...arr);
  if (typeof result !== neededReType) {
    throw new TypeError('Types are different');
  }
  return result;
};

module.exports = { contract };
