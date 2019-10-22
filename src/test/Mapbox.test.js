/* @jest-environment jsdom */
import React from "react";
import { mount } from "enzyme";

describe("Map component", () => {
    test("renders sum", () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
    });
});

