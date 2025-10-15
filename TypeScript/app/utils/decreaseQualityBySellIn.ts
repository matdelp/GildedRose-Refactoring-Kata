import { Item } from "@/gilded-rose";

export const decreaseQualityBySellin = (item: Item) => {
  item.quality++;
  if (item.sellIn < 11) {
    item.quality++;
  }
  if (item.sellIn < 6) {
    item.quality++;
  }
  if (item.sellIn < 0) {
    item.quality = 0;
  }
};
