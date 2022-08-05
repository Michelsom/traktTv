import React from "react";
import { render } from "@testing-library/react-native";
import { Home } from "../../screens/Home";

test("check Home component", () => {
  const { getByTestId, debug } = render(<Home />);
  const home = getByTestId("home");
  expect(home).toBeTruthy();
});
