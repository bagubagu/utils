/**
 * Removes empty values of an object
 * @param obj source of object
 */
export const removeEmptyValues = obj => {
  const propNames = Object.getOwnPropertyNames(obj);
  for (let i = 0; i < propNames.length; i++) {
    const propName = propNames[i];
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
      delete obj[propName];
    }
  }

  return obj;
};
