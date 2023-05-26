export const GetItemsLoadingAction = (name: string) =>
  "GET_ITEMS_LOADING_" + name;

export const GetItemsErrorAction = (name: string) => "GET_ITEMS_ERROR_" + name;

export const GetItemsSuccessAction = (name: string) =>
  "GET_ITEMS_SUCCESS_" + name;

export default interface GetItemsActionTypes<T> {
  type: string;
  payload?: T;
}
