import { Item } from "./class";
import { updateItem } from "./utils";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(updateItem);
    return this.items;
  }
}
