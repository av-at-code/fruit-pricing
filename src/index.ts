import { calculateTotal } from "./computePrice";
import { Fruit } from "./types";

const cart: Fruit[] = [
  "Apple",
  "Banana",
  "Melon",
  "Melon",
  "Melon",
  "Lime",
  "Lime",
  "Lime",
];
console.log(calculateTotal(cart));
