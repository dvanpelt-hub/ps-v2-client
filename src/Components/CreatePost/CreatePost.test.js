import React from "react";
import { render } from "@testing-library/react";
import CreatePost from "./CreatePost";
import { BrowserRouter } from "react-router-dom";

test("renders CreatePost component successfully", () => {
  render(
    <BrowserRouter>
      <CreatePost />
    </BrowserRouter>
  );
});
