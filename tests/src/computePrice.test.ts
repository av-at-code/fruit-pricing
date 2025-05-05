import { calculateTotal } from "../../src/computePrice";
import { Fruit } from "../../src/types";
describe("calculateTotal", () => {
    it("should return 0 for an empty cart", () => {
        const cart: Fruit[] = [];
        expect(calculateTotal(cart)).toBe(0);
    });

    it("should return the correct total for a cart with one item", () => {
        const cart: Fruit[] = ["Apple"];
        expect(calculateTotal(cart)).toBe(35);
    });

    it("should return the correct total for a cart with multiple items", () => {
        const cart: Fruit[] = ["Apple", "Banana", "Melon"];
        expect(calculateTotal(cart)).toBe(105);
    });

    it("should apply BOGO offer correctly", () => {
        const cart: Fruit[] = ["Melon", "Melon"];
        expect(calculateTotal(cart)).toBe(50);
    });

    it("should apply three-for-two offer correctly", () => {
        const cart: Fruit[] = ["Lime", "Lime", "Lime"];
        expect(calculateTotal(cart)).toBe(30);
    });

    it("applies BOGO offer correctly for multiple melons", () => {  
        const cart: Fruit[] = ["Melon", "Melon", "Melon", "Melon", "Melon"];
        expect(calculateTotal(cart)).toBe(150);
    }
    );
    it("applies three-for-two offer correctly for multiple limes", () => {
        const cart: Fruit[] = ["Lime", "Lime", "Lime", "Lime", "Lime"];
        expect(calculateTotal(cart)).toBe(60);
    }
    );
    it("calculates total correctly for mixed items", () => {
        const cart: Fruit[] = ["Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"];
        expect(calculateTotal(cart)).toBe(135);
    }
);
}   
);