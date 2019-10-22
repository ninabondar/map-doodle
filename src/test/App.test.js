import React from "react";
import { mount, shallow } from "enzyme";
import App from "../components/App";

describe("App component", () => {
  test("smoke test of App component", () => {
    shallow(<App />);
  });
});
©