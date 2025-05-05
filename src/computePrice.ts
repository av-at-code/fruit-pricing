import { pricingRules } from "./pricingRules";
import { Fruit } from "./types";

export function calculateTotal(cart: Fruit[]) : number {
    const counts: Record<Fruit, number> = {
        Apple: 0,
        Banana: 0,
        Melon: 0,
        Lime: 0,
    };
    for(const item of cart) {
        if(!(item in counts)) {
            console.log('Unknown fruit, skipping');
            continue;
        }
        counts[item]++;
    }
    let total = 0;
    for(const item in counts) {
        const quantity = counts[item as Fruit];
        total+= computePrice(item as Fruit, quantity);
    }
    return total;
   

}
function computePrice(fruit: string, quantity: number): number {
    const rule = pricingRules[fruit as Fruit];
    
    switch(rule.offer) {
        case 'bogo':
            return rule.pricePerItem * Math.ceil(quantity / 2);
        case 'threeForTwo':
            return rule.pricePerItem * ( Math.floor(quantity / 3) * 2 + (quantity % 3))
            default:
                return rule.pricePerItem * quantity;
    }

}


    


