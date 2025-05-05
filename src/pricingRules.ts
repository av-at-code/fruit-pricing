import { Fruit, PricingRule } from "./types";

export const pricingRules: Record<Fruit, PricingRule> = {
  Apple: {
    pricePerItem: 35,
    offer: null,
  },
  Banana: {
    pricePerItem: 20,
    offer: null,
  },
  Melon: {
    pricePerItem: 50,
    offer: "bogo",
  },
  Lime: {
    pricePerItem: 15,
    offer: "threeForTwo",
  },
};
