import { Item, GildedRose } from "@/gilded-rose";

//Item("name", sellIn, quality)

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should decrease quality and sellIn by 1 for a common item", () => {
    const gildedRose = new GildedRose([new Item("item", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });
  it("should increase quality and decrease sellIn by 1 for a Aged Brie", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(21);
  });
});
