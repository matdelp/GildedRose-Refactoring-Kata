import { Item } from "@/class";

export const updateConjuredItem = (currentItem: Item): void => {
  if (currentItem.quality <= 0) {
    currentItem.sellIn--;
    return;
  }
  if (currentItem.sellIn <= 0) {
    currentItem.quality = currentItem.quality - 2;
  }
  currentItem.quality = currentItem.quality - 2;
  currentItem.sellIn--;
};
