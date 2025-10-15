import { Item } from "@/gilded-rose";

export const increaseQualityBySellin = (item: Item) => {
  item.quality++;
  if (item.sellIn < 0) {
    item.quality++;
  }
};
