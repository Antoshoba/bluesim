export default class MathUtils {
  public static add(array: number[]) {
    return array.reduce((ans, val) => ans + val, 0);
  }

  public static mean(array: number[]) {
    return array.length > 0 ? MathUtils.add(array) / array.length : 0;
  }

  public static formatNumber(value: string | number) {
    return value === "" || isNaN(+value) ? undefined : +value;
  }
}
