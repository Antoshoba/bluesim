import GetItemsActionTypes, {
  GetItemsErrorAction,
  GetItemsLoadingAction,
  GetItemsSuccessAction,
} from "./GetItemsTypes";

import NotificationUtils from "@j2w/shared-frontend/utils/NotificationUtils";
import { ThunkAction } from "redux-thunk";
import GetItemsState from "./GetItemsState";

const requestItems = <T>(name: string): GetItemsActionTypes<T> => ({
  type: GetItemsLoadingAction(name),
});

const receiveItems = <T>(name: string, value: T): GetItemsActionTypes<T> => ({
  type: GetItemsSuccessAction(name),
  payload: value,
});

const failedItemsFetch = <T>(name: string): GetItemsActionTypes<T> => ({
  type: GetItemsErrorAction(name),
});

export default function GetItemsAction<T, RootState>(
  name: string,
  getItems: () => Promise<T>,
  getItemsState: (state: RootState) => GetItemsState<T>
) {
  const action =
    (
      force = false
    ): ThunkAction<Promise<void>, RootState, unknown, GetItemsActionTypes<T>> =>
    async (dispatch, getState) => {
      const data = getItemsState(getState());
      if (data.loading || (!force && data.loaded)) {
        return;
      }
      try {
        dispatch(requestItems<T>(name));
        const items = await getItems();
        dispatch(receiveItems<T>(name, items));
      } catch (e) {
        NotificationUtils.showGenericError(e);
        dispatch(failedItemsFetch<T>(name));
      }
    };

  return action;
}

export function UpdateItemAction<T, RootState>(
  name: string,
  updatedItems: (items: T) => T,
  getItemsState: (state: RootState) => GetItemsState<T>
) {
  const action: ThunkAction<
    Promise<void>,
    RootState,
    unknown,
    GetItemsActionTypes<T>
  > = async (dispatch, getState) => {
    const data = getItemsState(getState());
    const items = updatedItems(data.items);
    dispatch(receiveItems<T>(name, items));
  };

  return action;
}
