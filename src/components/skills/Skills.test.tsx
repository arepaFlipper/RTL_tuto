import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getAllByRole('listitem');
    // const listElement_fail = screen.getByRole('listitem');

    // expect(listElement).toHaveLength(3); //avoid hard coded values
    expect(listElement).toHaveLength(skills.length);
    // expect(listElement_fail).toHaveLength(skills.length);
  })
})
