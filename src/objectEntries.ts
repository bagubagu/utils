/*
 * copied from
 * http://exploringjs.com/es6/ch_iteration.html#objectEntries
 *
 */

export const objectEntries = obj => {
  let index = 0;

  // In ES6, you can use strings or symbols as property keys,
  // Reflect.ownKeys() retrieves both
  const propKeys = Reflect.ownKeys(obj);

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < propKeys.length) {
        const key = propKeys[index];
        index++;
        return { value: [key, obj[key]] };
      } else {
        return { done: true };
      }
    }
  };
};
