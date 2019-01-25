import chai = require("chai");
const expect = chai.expect;

import { react } from "./react";

describe("react", () => {
    function testValue(input: string, output: string) {
        const result = react(input);
        expect(result).to.equal(output);
    }

    describe("Degenerative cases", () => {
        it("Empty string remains unchanged", () => testValue("", ""));
        it("Single character does not react", () => testValue("a", "a"));
    });

    describe("Two character cases", () => {
        it("Different characters do not react", () => testValue("Ab", "Ab"));
        it("Identical characters do not react", () => testValue("aa", "aa"));
        it("Characters differing only by case react", () => testValue("Aa", ""));
        it("Reversed characters differing only by case react", () => testValue("aA", ""));
    });

    describe("Three character cases", () => {
        it("Separated reactive characters do not react", () => testValue("ABa", "ABa"));
        it("Characters differing only by case react", () => testValue("Aaa", "a"));
        it("Reversed characters differing only by case react", () => testValue("aaA", "a"));
    });

    describe("Four character cases", () => {
        it("Separated reactive characters do not react", () => testValue("ABab", "ABab"));
        it("Multiple characters differing only by case react", () => testValue("ABba", ""));
        it("Reversed multiple characters differing only by case react", () => testValue("abBA", ""));
    });
});
