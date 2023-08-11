import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from ".";

describe("Input Component", () => {
  it("component renders without crashing", () => {
    // render
    render(<Input onChange={() => {}} value="テキスト" />);

    // act
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays the passed value", () => {
    render(<Input onChange={() => {}} value="test value" />);
    expect(screen.getByRole("textbox")).toHaveValue("test value");
  });

  it("displays the default placeholder if none is provided", () => {
    render(<Input onChange={() => {}} value="" />);
    expect(screen.getByPlaceholderText("ここにテキストを入力してください")).toBeInTheDocument();
  });

  it("displays the passed placeholder", () => {
    render(<Input onChange={() => {}} placeholder="updated placeholder" value="" />);
    expect(screen.getByPlaceholderText("updated placeholder")).toBeInTheDocument();
  });

  it("calls onChange with new value on input change", async () => {
    const mockOnChange = jest.fn();
    const user = userEvent.setup();
    render(<Input onChange={mockOnChange} value="" />);

    const input = screen.getByRole("textbox");
    await user.click(input);
    await user.keyboard("new value");

    expect(mockOnChange).toHaveBeenCalledTimes(9);
    // expect(input).toHaveValue("new value");
  });
});
