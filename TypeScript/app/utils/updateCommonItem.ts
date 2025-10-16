import { Item } from "@/class";

export const updateCommonItem = (currentItem: Item): void => {
  if (currentItem.quality <= 0) {
    currentItem.sellIn--;
    return;
  }
  if (currentItem.sellIn <= 0) {
    currentItem.quality--;
  }
  currentItem.quality--;
  currentItem.sellIn--;
};
