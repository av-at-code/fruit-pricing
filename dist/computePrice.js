"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
const pricingRules_1 = require("./pricingRules");
function calculateTotal(cart) {
    const counts = {
        Apple: 0,
        Banana: 0,
        Melon: 0,
        Lime: 0,
    };
    for (const item of cart) {
        if (!(item in counts)) {
            console.log('Unknown fruit, skipping');
            continue;
        }
        counts[item]++;
    }
    let total = 0;
    for (const item in counts) {
        const quantity = counts[item];
        total += computePrice(item, quantity);
    }
    return total;
}
function computePrice(fruit, quantity) {
    const rule = pricingRules_1.pricingRules[fruit];
    switch (rule.offer) {
        case 'bogo':
            return rule.pricePerItem * Math.ceil(quantity / 2);
        case 'threeForTwo':
            return rule.pricePerItem * (Math.floor(quantity / 3) * 2 + (quantity % 3));
        default:
            return rule.pricePerItem * quantity;
    }
}
