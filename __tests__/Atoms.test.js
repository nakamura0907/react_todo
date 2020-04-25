import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Btn from "../src/components/atoms/Btn";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Btn", () => {
  act(() => {
    render(<Btn />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Btn text="Jest" />, container);
  });
  expect(container.textContent).toBe("Jest");
});
