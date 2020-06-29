import React from "react";
import { render } from "@testing-library/react";
import Hello from "./index";

test("renders learn react link", () => {
  const { getByText } = render(<Hello />);
  const linkElement = getByText(/你好，欢迎使用！/i);
  expect(linkElement).toBeInTheDocument();
});
