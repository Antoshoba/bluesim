export default class MapUtils {
  public static groupBy<T>(
    array: T[],
    getId: (elem: T) => string | undefined,
    startValue: { [key: string]: T } = {}
  ) {
    return array.reduce((ans, elem) => {
      const id = getId(elem);
      if (id) {
        ans[id] = elem;
      }
      return ans;
    }, startValue);
  }

  public static splitBy<T>(
    array: T[],
    getId: (elem: T) => string | undefined,
    startValue: { [key: string]: T[] } = {}
  ) {
    return array.reduce((ans, elem) => {
      const id = getId(elem);
      if (id) {
        if (!ans[id]) {
          ans[id] = [];
        }
        ans[id].push(elem);
      }
      return ans;
    }, startValue);
  }
}
