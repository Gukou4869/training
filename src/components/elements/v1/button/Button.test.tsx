import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button", () => {
  test("renders with text", () => {
    const { getByText } = render(<Button text="Test button" />);
    expect(getByText("Test button")).toBeInTheDocument();
  });

  test("has the correct style", () => {
    const { getByText } = render(<Button type="secondary" text="Test button" />);
    expect(getByText("Test button")).toHaveClass("secondary");
  });

  test("is disabled when prop is provided", () => {
    const { getByText } = render(<Button disabled={true} text="Test button" />);
    const button = getByText("Test button");
    expect(button).toBeDisabled();
  });

  test("fires onClick prop when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button text="Test button" onClick={onClick} />);
    userEvent.click(getByText("Test button"));
    expect(onClick).toHaveBeenCalled();
  });
});
