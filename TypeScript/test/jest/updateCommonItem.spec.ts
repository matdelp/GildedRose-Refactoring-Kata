import { Item } from "@/class";
import { updateCommonItem } from "@/utils";

describe("Is decreasing quality and sellIn for common items", () => {
  it("should decrease quality & sellIn by 1 when sellIn is > 0", () => {
    const item: Item = { name: "test", sellIn: 10, quality: 10 };
    updateCommonItem(item);
    expect(item.quality).toBe(9);
    expect(item.sellIn).toBe(9);
  });
  it("should not decrease quality when quality is already 0", () => {
    const item: Item = { name: "test", sellIn: 10, quality: 0 };
    updateCommonItem(item);
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(9);
  });
  it("should decrease quality by 2 & sellIn by 1 when sellIn is < 0", () => {
    const item: Item = { name: "test", sellIn: -1, quality: 10 };
    updateCommonItem(item);
    expect(item.quality).toBe(8);
    expect(item.sellIn).toBe(-2);
  });
  it("should decrease quality by 2 & sellIn by 1 when sellIn is = 0", () => {
    const item: Item = { name: "test", sellIn: 0, quality: 10 };
    updateCommonItem(item);
    expect(item.quality).toBe(8);
    expect(item.sellIn).toBe(-1);
  });
});
