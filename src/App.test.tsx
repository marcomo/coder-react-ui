// import "./__mocks__/matchMedia.mock.ts";
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


test("renders learn react link", () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText(/Workspaces/i);
  expect(linkElements[0]).toBeInTheDocument();
});
