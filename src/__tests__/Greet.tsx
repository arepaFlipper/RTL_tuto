/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name.
**/
import { render, screen } from "@testing-library/react";
import Greet from "../components/greeet/Greet";

describe('Greet Component specs', () => {
  test('Greet renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });


})
describe('Nested', () => {
  describe('Nested', () => {
    test('renders a name', () => {
      render(<Greet name="Cristian" />);
      const textElement = screen.getByText('Hello Cristian');
      expect(textElement).toBeInTheDocument();
    });
  });
});
