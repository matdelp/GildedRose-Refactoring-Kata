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
  it("should decrease quality by 2 for an item after sellIn date passed", () => {
    const gildedRose = new GildedRose([new Item("item", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(18);
  });
  it("quality should never be negative", () => {
    const gildedRose = new GildedRose([new Item("item", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("quality should never be >50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("should increase quality and decrease sellIn by 1 for a Aged Brie", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(21);
  });
  it("should not decrease quality for a Sulfuras", () => {
    const gildedRose = new GildedRose([new Item("Sulfuras", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(20);
  });
  it("should never decrease quality for a Sulfuras", () => {
    const gildedRose = new GildedRose([new Item("Sulfuras", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(20);
  });
  it("should increase quality by 1 when more than 10 days  in sellIn for Backstage passes", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes", 11, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });
  it("should increase quality by 2 when 10 days or less in sellIn for Backstage passes", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes", 9, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });
  it("should increase quality by 3 when 5 days or less in sellIn for Backstage passes", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes", 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });
  it("should set quality to 0 when sellIn is negative for Backstage passes", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes", -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
