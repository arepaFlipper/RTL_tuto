import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./Counter_two";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });
});
