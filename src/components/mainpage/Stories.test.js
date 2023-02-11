import React from "react";
import { findByText, render, screen } from "@testing-library/react";
import Stories from "./Stories";
import Story from "./Story";
import "@testing-library/jest-dom";
describe("Stories component", () => {
  it("renders image of user and name of user", async () => {
    render(
      <Story
        profileImg={"https://randomuser.me/api/portraits/women/58.jpg"}
        firstName={"Sara"}
      />
    );
    const userName = await screen.findByText("Sara");
    expect(userName).toBeTruthy();
  });
});
