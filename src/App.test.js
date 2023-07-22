import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm.js';
import BookingPage from './components/pages/BookingPage.js';


test('renders "Table Reservations" heading in BookingPage', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText(/Table Reservations/);
  expect(headingElement).toBeInTheDocument();
});

test('updateTimes returns the same state', () => {
  render(<BookingForm />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2023-07-21" } });
  const timeDropDown = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  expect(timeDropDown.value).toEqual("17:00");
});

