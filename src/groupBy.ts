/**
 * Groups array into object composed by keys
 * @param array source of array
 * @param prop object key or function that returns a value
 * @example
 * groupBy([{ b: 1 }], 'b')
 * groupBy([{ b: 1.23 }], (e) => e.toFixed())
 */
export function groupBy(array: any[], prop: string | any): { [key: string]: any[] } {
  return array.reduce((groups, item) => {
    let val;
    if (typeof prop === "string") {
      val = item[prop];
    } else {
      val = prop(item);
    }
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}
