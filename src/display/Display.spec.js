import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from "./Display";

// Test away!
/*
Display Component

displays if gate is open/closed and if it is locked/unlocked

displays 'Closed' if the closed prop is true and 'Open' if otherwise
displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise

when locked or closed use the red-led class
when unlocked or open use the green-led class

*/

test("displays if gate is open/closed and if it is locked/unlocked", () => {
  let lockedProp = true;
  let closedProp = true;
  const wrapper = rtl.render(
    <Display locked={lockedProp} closed={closedProp} />
  );
  const locked = wrapper.getByText(lockedProp ? /locked/i : /unlocked/i);
  const closed = wrapper.getByText(closedProp ? /locked/i : /unlocked/i);

  expect(locked).toBeVisible();
  expect(closed).toBeVisible();
});

test("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
  const closedProp = true;
  const wrapper = rtl.render(<Display closed={closedProp} />);

  const closed = wrapper.getByText(closedProp ? /Closed/i : /Open/i);
  expect(closed).toBeVisible();
});

test("displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {
  const lockedProp = true;
  const wrapper = rtl.render(<Display closed={lockedProp} />);

  const locked = wrapper.getByText(lockedProp ? /Locked/i : /Unlocked/i);
  expect(locked).toBeVisible();
});

test("when locked use the red-led class", () => {
  const wrapper = rtl.render(<Display locked={true} />);
  const locked = wrapper.getByText(/Locked/i);
  expect(locked).toHaveClass("red-led");
});

test("when unlocked use the green-led class", () => {
  const wrapper = rtl.render(<Display locked={false} />);
  const locked = wrapper.getByText(/Unlocked/i);
  expect(locked).toHaveClass("green-led");
});

test("when closed use the red-led class", () => {
  const wrapper = rtl.render(<Display closed={true} />);
  const closed = wrapper.getByText(/Closed/i);
  expect(closed).toHaveClass("red-led");
});

test("when open use the green-led class", () => {
  const wrapper = rtl.render(<Display closed={false} />);
  const closed = wrapper.getByText(/Open/i);
  expect(closed).toHaveClass("green-led");
});
