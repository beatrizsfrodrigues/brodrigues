import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";
import "@testing-library/jest-dom";

test("renders Home component with correct content", () => {
  render(<Home />);
  const headingElement = screen.getByRole("heading", {
    name: /welcome to the home page!/i,
  });
  expect(headingElement).toBeInTheDocument();

  const paragraphElement = screen.getByText(
    /this is the home component of your application./i,
  );
  expect(paragraphElement).toBeInTheDocument();

  const buttonElement = screen.getByRole("button", { name: /get started/i });
  expect(buttonElement).toBeInTheDocument();
});
