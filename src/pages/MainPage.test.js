import React from "react";
import { render } from "@testing-library/react";
import Menu from "../components/menu/Menu";
import "@testing-library/jest-dom";
describe("Main Page Component", () => {
  it("renders correct menu", () => {
    const { getByRole, container } = render(<Menu />);
    expect(getByRole("heading").textContent).toMatch(/PetsTagram/i);
    expect(container).toMatchSnapshot();
  });
});
