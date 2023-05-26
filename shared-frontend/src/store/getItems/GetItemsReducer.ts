import GetItemsActionTypes, {
  GetItemsErrorAction,
  GetItemsLoadingAction,
  GetItemsSuccessAction,
} from "./GetItemsTypes";

import GetItemsState from "./GetItemsState";
import { Reducer } from "redux";

function getInitialState<T>(value: T): GetItemsState<T> {
  return {
    items: value,
    loading: false,
    loaded: false,
    hasError: false,
  };
}

export default function GetItemsReducer<T>(
  name: string,
  initialValue: T,
  resetAction?: string
) {
  const reducer: Reducer<GetItemsState<T>, GetItemsActionTypes<T>> = (
    state = getInitialState(initialValue),
    action
  ): GetItemsState<T> => {
    switch (action.type) {
      case GetItemsLoadingAction(name):
        return {
          ...state,
          loading: true,
          loaded: false,
          hasError: false,
        };
      case GetItemsErrorAction(name):
        return {
          ...state,
          loading: false,
          loaded: false,
          hasError: true,
        };
      case GetItemsSuccessAction(name):
        return {
          items: action.payload ?? state.items,
          loading: false,
          loaded: true,
          hasError: false,
        };
      case resetAction:
        return { ...getInitialState(initialValue) };
      default:
        return state;
    }
  };
  return reducer;
}
