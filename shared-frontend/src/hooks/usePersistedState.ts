import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LocalStorageKeys from "../enums/LocalStorageKeys";
import LocalStorageUtils from "../utils/LocalStorageUtils";

export default function usePersistedState<T>(
  key: LocalStorageKeys,
  defaultValue: T,
  translateInitialState?: (value: T) => T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const value = LocalStorageUtils.get(key, defaultValue);
    return translateInitialState ? translateInitialState(value) : value;
  });

  useEffect(() => {
    LocalStorageUtils.store(key, state);
  }, [key, state]);

  return [state, setState];
}
