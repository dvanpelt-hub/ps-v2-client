import React from "react";
import { render } from "@testing-library/react";
import StocksPosts from "./StocksPosts";
import { BrowserRouter } from "react-router-dom";

test("renders StocksPosts component successfully", () => {
  render(
    <BrowserRouter>
      <StocksPosts />
    </BrowserRouter>
  );
});
