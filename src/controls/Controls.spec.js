import React from "react";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";
import expectExport from "expect";

// Test away!

/*
Controls Component
provide buttons to toggle the closed and locked states.
buttons' text changes to reflect the state the door will be in if clicked
the closed toggle button is disabled if the gate is locked
the locked toggle button is disabled if the gate is open


*/

test("provide buttons to toggle the closed and locked states.", () => {
  const wrapper = rtl.render(<Controls />);
  const lockBtn = wrapper.getByText(/Lock Gate/i);
  const closeBtn = wrapper.getByText(/Close Gate/i);

  expect(lockBtn).toBeVisible();
  expect(closeBtn).toBeVisible();
});

test("the closed toggle button is disabled if the gate is locked", () => {
  const wrapper = rtl.render(<Controls locked={true} toggleLocked={true} />);

  const openBtn = wrapper.getByText(/Open Gate/i);
  rtl.act(() => {
    rtl.fireEvent.click(openBtn);
  });

  expect(openBtn).not.toHaveBeenCalled();
});
