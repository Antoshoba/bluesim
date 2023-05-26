import MapUtils from "./MapUtils";

export default class ArrayUtils {
  public static reorder<T>(
    items: T[],
    newOrder: string[],
    getId: (val: T) => string,
    onItemMissing?: (id: string) => void
  ): T[] {
    const mappedItems = MapUtils.groupBy(items, getId);

    const reorderedItems = newOrder
      .map((id): T | undefined => {
        const item = mappedItems[id];
        if (!item) {
          onItemMissing?.(id);
          return undefined;
        }
        return item;
      })
      .filter((item): item is T => item !== undefined);

    const remainingItems = items.filter(
      (item) => !newOrder.includes(getId(item))
    );

    return reorderedItems.concat(remainingItems);
  }

  public static swap<T>(items: T[], value: T, targetPosition: number) {
    const newItems = [...items];
    newItems.splice(targetPosition, 0, value);
    return newItems.filter(
      (item, position) => item !== value || position === targetPosition
    );
  }

  public static addIfMissing<T>(
    items: T[],
    value: T,
    getId: (val: T) => string
  ) {
    const valueId = getId(value);
    const exists = items.find((item) => getId(item) === valueId);
    if (!exists) {
      items.push(value);
    }
    return items;
  }

  public static getUnique<T>(items: T[], getId: (val: T) => string) {
    const valueMap = new Set<string>();
    const values: T[] = [];
    items.forEach((item) => {
      const id = getId(item);
      if (!valueMap.has(id)) {
        valueMap.add(id);
        values.push(item);
      }
    });
    return values;
  }
}
