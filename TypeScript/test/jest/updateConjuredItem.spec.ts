import { Item } from "@/class";
import { updateConjuredItem } from "@/utils";

describe("Is decreasing quality and sellIn for conjured items", () => {
  it("should decrease quality by 2 & sellIn by 1 when sellIn is > 0", () => {
    const item: Item = { name: "test", sellIn: 10, quality: 10 };
    updateConjuredItem(item);
    expect(item.quality).toBe(8);
    expect(item.sellIn).toBe(9);
  });
  it("should not decrease quality when quality is already 0", () => {
    const item: Item = { name: "test", sellIn: 10, quality: 0 };
    updateConjuredItem(item);
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(9);
  });
  it("should decrease quality by 4 & sellIn by 1 when sellIn is < 0", () => {
    const item: Item = { name: "test", sellIn: -1, quality: 10 };
    updateConjuredItem(item);
    expect(item.quality).toBe(6);
    expect(item.sellIn).toBe(-2);
  });
  it("should decrease quality by 2 & sellIn by 1 when sellIn is = 0", () => {
    const item: Item = { name: "test", sellIn: 0, quality: 10 };
    updateConjuredItem(item);
    expect(item.quality).toBe(6);
    expect(item.sellIn).toBe(-1);
  });
});
