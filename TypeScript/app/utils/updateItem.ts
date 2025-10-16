import { Item } from "@/class";
import {
  increaseQualityBySellinBrie,
  increaseQualityBySellinConcert,
} from "./increaseQualityBySellIn";
import { isCommonItem } from "./isCommonItem";
import { updateCommonItem } from "./updateCommonItem";

export const updateItem = (item: Item): void => {
  if (isCommonItem(item.name)) {
    updateCommonItem(item);
    return;
  }
  if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
    increaseQualityBySellinConcert(item);
  }
  if (item.name == "Aged Brie") {
    increaseQualityBySellinBrie(item);
  }
  item.sellIn--;
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }
  item.quality = Math.min(item.quality, 50);
};
