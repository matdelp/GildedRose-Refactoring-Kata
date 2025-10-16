import { Item } from "@/class";

export const increaseQualityBySellinBrie = (
  item: Pick<Item, "quality" | "sellIn">
): void => {
  item.quality++;
  if (item.sellIn < 0) {
    item.quality++;
  }
};

export const increaseQualityBySellinConcert = (
  item: Pick<Item, "quality" | "sellIn">
): void => {
  if (item.sellIn < 0) {
    item.quality = 0;
    return;
  }
  item.quality++;
  if (item.sellIn <= 10) {
    item.quality++;
  }
  if (item.sellIn <= 5) {
    item.quality++;
  }
};
