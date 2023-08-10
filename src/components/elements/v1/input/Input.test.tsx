import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

describe("Input Component", () => {
  it("component renders without crashing", () => {
    // render
    render(<Input value="テキスト" onChange={() => {}} />);

    // act
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays the passed value", () => {
    render(<Input value="test value" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveValue("test value");
  });

  it("displays the default placeholder if none is provided", () => {
    render(<Input value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText("ここにテキストを入力してください")).toBeInTheDocument();
  });

  it("displays the passed placeholder", () => {
    render(<Input value="" placeholder="updated placeholder" onChange={() => {}} />);
    expect(screen.getByPlaceholderText("updated placeholder")).toBeInTheDocument();
  });

  it("calls onChange with new value on input change", async () => {
    const mockOnChange = jest.fn();
    const user = userEvent.setup();
    render(<Input value="" onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    await user.click(input);
    await user.keyboard("new value");

    expect(mockOnChange).toHaveBeenCalledTimes(9);
    // expect(input).toHaveValue("new value");
  });
});
