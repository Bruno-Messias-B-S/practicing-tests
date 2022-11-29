import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';

test('it should display the logo', () => {
  render(<App/>)

  const logoName = screen.getByText('LOGO')
  expect(logoName).toBeInTheDocument();
});

test('it should display all the navigation titles', () => {
  const { getByText } = render(<App/>)

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Home2')).toBeInTheDocument();
  expect(getByText('Home3')).toBeInTheDocument();
  expect(getByText('Home4')).toBeInTheDocument();
})

test('it should have a button in the document', () => {
  render(<App/>)

  const button = screen.getByText('Clique')
  expect(button).toBeInTheDocument();
});

test('it should handle the click', () => {
  const { getByText } = render(<App/>)

  const fon = fireEvent.click(getByText(/Clique/))
  expect(fon).toBeTruthy();
})

test("it should change state's value", () => {
  const { getByText } = render(<App/>)

  expect(getByText(0)).toBeInTheDocument();
    fireEvent.click(getByText(/Clique/))
  expect(getByText(1)).toBeInTheDocument();
})