import LocalStorageKeys from "../enums/LocalStorageKeys";

export default class LocalStorageUtils {
  public static get<T>(key: LocalStorageKeys, defaultValue: T) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : defaultValue;
  }

  public static store<T>(key: LocalStorageKeys, value: T) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  public static remove(key: LocalStorageKeys) {
    return localStorage.removeItem(key);
  }

  public static getValueFromMap<T>(
    storageKey: LocalStorageKeys,
    key: string,
    defaultValue: T
  ) {
    const defaultMap: { [key: string]: T } = {};
    return LocalStorageUtils.get(storageKey, defaultMap)[key] ?? defaultValue;
  }

  public static storeValueInMap<T>(
    storageKey: LocalStorageKeys,
    key: string,
    value: T
  ) {
    const defaultMap: { [key: string]: T } = {};
    const currentValue = LocalStorageUtils.get(storageKey, defaultMap);
    return LocalStorageUtils.store(storageKey, {
      ...currentValue,
      [key]: value,
    });
  }
}
