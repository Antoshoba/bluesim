export default interface GetItemsState<R> {
  items: R;
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
}
