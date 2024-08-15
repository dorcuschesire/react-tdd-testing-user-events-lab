import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for better assertions

import App from '../App'; // Adjust the import path according to your project structure

describe('Newsletter Signup Form', () => {
  it('renders the form elements correctly', () => {
    render(<App />);

    // Check if the form elements are present
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/interests:/i)).toBeInTheDocument(); // Update this line
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it('displays a success message when the form is submitted', () => {
    render(<App />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByText(/submit/i));

    // Check if success message is displayed
    expect(screen.getByText(/thank you for signing up/i)).toBeInTheDocument();
  });

  it('includes user interests in the success message', () => {
    render(<App />);

    // Fill out the form and select interests
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByLabelText(/technology/i)); // Adjust the interest label as per your form
    fireEvent.click(screen.getByText(/submit/i));

    // Check if the interests are included in the success message
    expect(screen.getByText(/interests: technology/i)).toBeInTheDocument();
  });
});
