import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Btn from "../../web/src/components/atoms/Btn";

test("isBtn", () => {
  const props = {
    background: "red",
    color: "white",
    text: "hoge",
    onClickFunction: () => {},
  };
  const element = <Btn {...props} />;
  expect(ReactTestUtils.isElement(element)).toBe(true);
});

test("onClickFunction", () => {
  const props = {
    background: "red",
    color: "white",
    text: "hoge",
    onClickFunction: jest.fn(),
  };

  const subject = mount(<Btn {...props} />);
  subject.find("button").simulate("click");

  expect(props.onClickFunction).toBeCalled();
});
