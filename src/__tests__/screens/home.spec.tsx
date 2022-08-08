import React from "react";
import { render } from "@testing-library/react-native";
import { Home } from "../../screens/Home";
import { App } from "../../App";

test("check Home component", () => {
  const { debug } = render(<App />);
  debug();
});
