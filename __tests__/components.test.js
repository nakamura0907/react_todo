import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Btn from "../src/components/atoms/Btn";
import Form from "../src/components/atoms/Form";

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
    render(<Btn text="ADD" />, container);
  });
  expect(container.textContent).toBe("ADD");

  act(() => {
    render(<Btn text="remove" />, container);
  });
  expect(container.textContent).toBe("remove");
});

it("Form", () => {
  // act(() => {
  //   render(<Form value="" />, container);
  // });
  // expect(container.textContent).toBe("");
  //
  // act(() => {
  //   render(<Form value="Jest" />, container);
  // });
  // expect(container.textContent).toBe("Jest");
});
