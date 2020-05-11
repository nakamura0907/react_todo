import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import Form from "../../web/src/components/atoms/Form";

test("isForm", () => {
  const props = {
    // input: "object"
    name: "todoForm",
    placeholder: "sample",
    type: "text",
  };
  const element = <Form {...props} />;
  expect(ReactTestUtils.isElement(element)).toBe(true);
});
