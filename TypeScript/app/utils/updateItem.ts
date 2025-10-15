import {
  increaseQualityBySellinBrie,
  increaseQualityBySellinConcert,
} from "./increaseQualityBySellIn";
import { isCommonItem } from "./isCommonItem";
import { updateCommonItem } from "./updateCommonItem";

export const updateItem = (currentItem) => {
  if (isCommonItem(currentItem.name)) {
    updateCommonItem(currentItem);
    return;
  }
  if (currentItem.name == "Backstage passes to a TAFKAL80ETC concert") {
    increaseQualityBySellinConcert(currentItem);
  }
  if (currentItem.name == "Aged Brie") {
    increaseQualityBySellinBrie(currentItem);
  }
  currentItem.sellIn--;
  if (currentItem.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }
  currentItem.quality = Math.min(currentItem.quality, 50);
};
