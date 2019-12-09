// Test away

import React from "react";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

test("Snapshot", () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});

test("Default Unlocked and Open", () => {
  const wrapper = rtl.render(<Dashboard />);
  const unlocked = wrapper.getByText(/unlocked/i);
  const open = wrapper.getByText(/open/i);

  expect(unlocked).toBeVisible();
  expect(open).toBeVisible();
});
