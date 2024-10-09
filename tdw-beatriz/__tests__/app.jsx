// __tests__/app.test.jsx
// import React from "react";
// import { render, screen } from "@testing-library/react";
// import App from "../src/pages/_app";
// import Home from "../src/pages/Home";
// import "@testing-library/jest-dom";

// jest.mock("../src/pages/Home", () => {
//   return function DummyHome() {
//     return <h1>Welcome to the home page!</h1>;
//   };
// });

// describe("App component", () => {
//   test("renders Home component", () => {
//     render(<App Component={Home} pageProps={{}} />);

//     const headingElements = screen.getAllByRole("heading", {
//       name: /welcome to the home page!/i,
//     });

//     expect(headingElements.length).toBe(1);
//     expect(headingElements[0]).toBeInTheDocument();
//   });
// });

const sum = require("../src/sum");
test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
