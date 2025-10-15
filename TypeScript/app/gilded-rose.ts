import {
  increaseQualityBySellinBrie,
  increaseQualityBySellinConcert,
  isCommonItem,
} from "./utils";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn--;
        break;
      }

      if (isCommonItem(this.items[i].name) && this.items[i].quality > 0) {
        this.items[i].quality--;
        if (this.items[i].sellIn <= 0) {
          this.items[i].quality--;
        }
        this.items[i].sellIn--;
        break;
      }

      if (
        this.items[i].quality < 50 &&
        this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
      ) {
        increaseQualityBySellinConcert(this.items[i]);
        this.items[i].sellIn--;
        break;
      }
      if (this.items[i].quality < 50 && this.items[i].name == "Aged Brie") {
        increaseQualityBySellinBrie(this.items[i]);
        this.items[i].sellIn--;
        break;
      }
    }
    return this.items;
  }
}
