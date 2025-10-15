import { Item } from "./class";
import {
  increaseQualityBySellinBrie,
  increaseQualityBySellinConcert,
  isCommonItem,
} from "./utils";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];

      if (currentItem.quality <= 0) {
        currentItem.sellIn--;
        break;
      }

      if (currentItem.name === "Sulfuras, Hand of Ragnaros") {
        currentItem.sellIn--;
        break;
      }

      if (isCommonItem(currentItem.name)) {
        currentItem.quality--;
        if (currentItem.sellIn <= 0) {
          currentItem.quality--;
        }
        currentItem.sellIn--;
        break;
      }
      if (currentItem.quality >= 50) {
        currentItem.sellIn--;
        break;
      }

      if (currentItem.name == "Backstage passes to a TAFKAL80ETC concert") {
        increaseQualityBySellinConcert(currentItem);
        currentItem.sellIn--;
        break;
      }
      if (currentItem.name == "Aged Brie") {
        increaseQualityBySellinBrie(currentItem);
        currentItem.sellIn--;
        break;
      }
    }
    return this.items;
  }
}
