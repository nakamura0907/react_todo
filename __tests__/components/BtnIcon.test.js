import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import BtnIcon from "../../web/src/components/atoms/BtnIcon";

test("isBtnIcon", () => {
  const props = {
    background: "blue",
    color: "white",
    iconClass: "far fa-check",
    onClickFunction: () => {},
  };
  const element = <BtnIcon {...props} />;
  expect(ReactTestUtils.isElement(element)).toBe(true);
});
