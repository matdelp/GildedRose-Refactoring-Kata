import { Item } from "@/class";
import { GildedRose } from "@/gilded-rose";

//Item("name", sellIn, quality)

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should not change quality if already null", () => {
    const gildedRose = new GildedRose([new Item("item", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(0);
  });
  it("should not increase quality if already 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });
  it("should not increase quality if already 50", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
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

  it("quality should never be >50 for items other than Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("quality should never be >50 for items other than Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("quality should always be 80 for Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
  it("should not decrease quality for a Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 10, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
  it("should never decrease quality for a Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", -10, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it("should increase quality by 1 for a Aged Brie before sellIn date", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });
  it("should increase quality by 2 for a Aged Brie after sellIn date", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it("should increase quality by 1 when more than 10 days in sellIn for Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });
  it("should increase quality by 2 when 10 days or less in sellIn for Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });
  it("should increase quality by 3 when 5 days or less in sellIn for Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });
  it("should set quality to 0 when sellIn is negative for Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
