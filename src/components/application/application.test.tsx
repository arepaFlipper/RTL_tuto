import { Application } from './application';
import { render, screen } from '@testing-library/react';

describe("Application Testing", () => {
  test("renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole('textbox');
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
