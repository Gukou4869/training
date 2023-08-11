import React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Button from ".";

describe("Button", () => {
  test("renders with text", () => {
    const { getByText } = render(<Button text="Test button" />);
    expect(getByText("Test button")).toBeInTheDocument();
  });

  test("has the correct style", () => {
    const { getByText } = render(<Button text="Test button" type="secondary" />);
    expect(getByText("Test button")).toHaveClass("secondary");
  });

  test("is disabled when prop is provided", () => {
    const { getByText } = render(<Button disabled={true} text="Test button" />);
    const button = getByText("Test button");
    expect(button).toBeDisabled();
  });

  test("fires onClick prop when clicked", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    const { getByText } = render(<Button onClick={onClick} text="Test button" />);
    await user.click(getByText("Test button"));
    expect(onClick).toHaveBeenCalled();
  });
});
