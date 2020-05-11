import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

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

test("onClickFunction", () => {
  const props = {
    background: "blue",
    color: "white",
    iconClass: "far fa-check",
    onClickFunction: jest.fn(),
  };
  const subject = mount(<BtnIcon {...props} />);
  subject.find("button").simulate("click");

  expect(props.onClickFunction).toBeCalled();
});
