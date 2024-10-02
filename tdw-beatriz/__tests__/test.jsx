// src/pages/Home.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home"; // Importing the Home component

test("renders Home component with correct content", () => {
  render(<Home />); // Render the Home component

  // Check if the heading is present
  const headingElement = screen.getByRole("heading", {
    name: /welcome to the home page!/i,
  });
  expect(headingElement).toBeInTheDocument();

  // Check if the paragraph is present
  const paragraphElement = screen.getByText(
    /this is the home component of your application./i,
  );
  expect(paragraphElement).toBeInTheDocument();

  // Check if the button is present
  const buttonElement = screen.getByRole("button", { name: /get started/i });
  expect(buttonElement).toBeInTheDocument();
});
