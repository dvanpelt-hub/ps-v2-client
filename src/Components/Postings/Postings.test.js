import React from "react";
import { render } from "@testing-library/react";
import Postings from "./Postings";
import { BrowserRouter } from "react-router-dom";

test("renders Postings component successfully", () => {
  render(
    <BrowserRouter>
      <Postings />
    </BrowserRouter>
  );
});
