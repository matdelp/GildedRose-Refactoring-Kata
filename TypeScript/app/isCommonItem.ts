export const isCommonItem = (name) => {
  if (
    name === "Aged Brie" ||
    name === "Backstage passes to a TAFKAL80ETC concert" ||
    name === "Sulfuras, Hand of Ragnaros"
  )
    return false;
  else return true;
};
