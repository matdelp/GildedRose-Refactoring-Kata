import { Item } from "@/class";

export const increaseQualityBySellinBrie = (item: Item) => {
  item.quality++;
  if (item.sellIn < 0) {
    item.quality++;
  }
};

export const increaseQualityBySellinConcert = (item: Item) => {
  item.quality++;
  if (item.sellIn <= 10) {
    item.quality++;
  }
  if (item.sellIn <= 5) {
    item.quality++;
  }
  if (item.sellIn < 0) {
    item.quality = 0;
  }
};
