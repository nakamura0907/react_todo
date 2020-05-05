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
    render(<Btn text="ADD" />, container);
  });
  expect(container.textContent).toBe("ADD");

  act(() => {
    render(<Btn text="remove" />, container);
  });
  expect(container.textContent).toBe("remove");

  act(() => {
    render(<Btn text="update" />, container);
  });
  expect(container.textContent).toBe("update");
});
