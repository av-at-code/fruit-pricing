export type OfferType = "bogo" | "threeForTwo" | "buyFourGetSix" | null;
export type Fruit = "Apple" | "Banana" | "Melon" | "Lime";
export interface PricingRule {
  pricePerItem: number;
  offer: OfferType;
}
