import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("Works", () => {
    render(<App />);
   const item = screen.getByRole('heading',{
    level:1,
   })
    expect(item).toHaveTextContent('Welcome')
  });
});
