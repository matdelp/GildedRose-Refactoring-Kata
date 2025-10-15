import { Item } from "@/gilded-rose";
import { increaseQualityBySellinBrie } from "@/utils";

describe("Is increasing quality depending on SellIn value", () => {
  it("should increase quality by 1 when sellIn is positive", () => {
    const item: Item = { name: "test", sellIn: 5, quality: 10 };
    increaseQualityBySellinBrie(item);
    expect(item.quality).toBe(11);
  });
  it("should increase quality by 2 when sellIn is negative", () => {
    const item: Item = { name: "test", sellIn: -1, quality: 10 };
    increaseQualityBySellinBrie(item);
    expect(item.quality).toBe(12);
  });
  it("should increase quality by 1 when sellIn is null", () => {
    const item: Item = { name: "test", sellIn: 0, quality: 10 };
    increaseQualityBySellinBrie(item);
    expect(item.quality).toBe(11);
  });
});
