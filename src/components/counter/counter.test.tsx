import { render, screen } from "@testing-library/react";
import user, { userEvent } from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: /set/i,
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });

  test("clear", async () => {
    render(<textarea defaultValue="Hello, World" />);
    await userEvent.clear(screen.getByRole("textbox"));
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  test.skip("selectOptions", async () => {
    render(
      <select>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>,
    );
    await userEvent.selectOptions(screen.getByRole("listbox"), ["1", "C"]);
    expect(screen.getByRole("option", { name: "A" })).selected.toBe(true);
    expect(screen.getByRole("option", { name: "B" })).selected.toBe(false);
    expect(screen.getByRole("option", { name: "C" })).selected.toBe(true);
  });

  test.skip("deselectOptions", async () => {
    render(
      <select>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>,
    );
    await userEvent.deselectOptions(screen.getByRole("listbox"), "2");
    expect(screen.getByText("B")).selected.toBe(false);
  });

  test.skip("upload file", async () => {
    render(
      <div>
        <label htmlFor="file-uploader">Upload file:</label>
        <input id="file-uploader" type="file" />
      </div>,
    );
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const input = screen.getByLabelText(/upload file/i);
    await userEvent.upload(input, file);
    expect(input).files[0].toBe(file);
    expect(input).files.item(0).toBe(file);
    expect(input).files.toHaveLength(0);
  });
});
