import { Item } from "@/class";
import { increaseQualityBySellinConcert } from "@/utils";

describe("Is decreasing quality depending on SellIn value", () => {
  it("should increase quality by 1 when sellIn is > 10", () => {
    const item: Item = { name: "test", sellIn: 11, quality: 10 };
    increaseQualityBySellinConcert(item);
    expect(item.quality).toBe(11);
  });

  it("should increase quality by 2 when sellIn is 10", () => {
    const item: Item = { name: "test", sellIn: 10, quality: 10 };
    increaseQualityBySellinConcert(item);
    expect(item.quality).toBe(12);
  });

  it("should increase quality by 2 when sellIn is <10 and >5", () => {
    const item: Item = { name: "test", sellIn: 8, quality: 10 };
    increaseQualityBySellinConcert(item);
    expect(item.quality).toBe(12);
  });

  it("should increase quality by 3 when sellIn is 5", () => {
    const item: Item = { name: "test", sellIn: 5, quality: 10 };
    increaseQualityBySellinConcert(item);
    expect(item.quality).toBe(13);
  });

  it("should increase quality by 3 when sellIn is <5 and >=0", () => {
    const item: Item = { name: "test", sellIn: 3, quality: 10 };
    increaseQualityBySellinConcert(item);
    expect(item.quality).toBe(13);
  });

  it("should drop quality to 0 when sellIn is negative", () => {
    const item: Item = { name: "test", sellIn: -1, quality: 10 };
    increaseQualityBySellinConcert(item);
    expect(item.quality).toBe(0);
  });
});
