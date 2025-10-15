import { isCommonItem } from "@/utils/isCommonItem";

describe("Is commmon Item", () => {
  it("should return true if Item's name is not Aged Brie, Backstage passes to a TAFKAL80ETC concert or Sulfuras, Hand of Ragnaros", () => {
    const name = "item";
    const result = isCommonItem(name);
    expect(result).toBe(true);
  });
  it("should return false is Item's name is Aged Brie", () => {
    const name = "Aged Brie";
    const result = isCommonItem(name);
    expect(result).toBe(false);
  });
  it("should return false is Item's name is Backstage passes to a TAFKAL80ETC concert", () => {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const result = isCommonItem(name);
    expect(result).toBe(false);
  });
  it("should return false is Item's name is Sulfuras, Hand of Ragnaros", () => {
    const name = "Sulfuras, Hand of Ragnaros";
    const result = isCommonItem(name);
    expect(result).toBe(false);
  });
});
