const SPECIAL_ITEMS = [
  "Aged Brie",
  "Backstage passes to a TAFKAL80ETC concert",
  "Sulfuras, Hand of Ragnaros",
];

export const isCommonItem = (name) => {
  return !SPECIAL_ITEMS.includes(name);
};
