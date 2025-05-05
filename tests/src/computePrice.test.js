"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computePrice_1 = require("../../src/computePrice");
describe("calculateTotal", () => {
    it("should return 0 for an empty cart", () => {
        const cart = [];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(0);
    });
    it("should return the correct total for a cart with one item", () => {
        const cart = ["Apple"];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(35);
    });
    it("should return the correct total for a cart with multiple items", () => {
        const cart = ["Apple", "Banana", "Melon"];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(105);
    });
    it("should apply BOGO offer correctly", () => {
        const cart = ["Melon", "Melon"];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(50);
    });
    it("should apply three-for-two offer correctly", () => {
        const cart = ["Lime", "Lime", "Lime"];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(30);
    });
    it("returns 0 for an empty cart", () => {
        const cart = [];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(0);
    });
    it("applies BOGO offer correctly for multiple melons", () => {
        const cart = ["Melon", "Melon", "Melon", "Melon", "Melon"];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(150);
    });
    it("applies three-for-two offer correctly for multiple limes", () => {
        const cart = ["Lime", "Lime", "Lime", "Lime", "Lime"];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(60);
    });
    it("calculates total correctly for mixed items", () => {
        const cart = ["Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"];
        expect((0, computePrice_1.calculateTotal)(cart)).toBe(135);
    });
});
