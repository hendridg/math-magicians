import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Test render Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test user event with Button in Calculator component', () => {
  it('Result should be 6', () => {
    render(<Calculator />);
    const btnElement = screen.getByText(/6/i);
    const resultElement = screen.getByTestId('result-id');
    fireEvent.click(btnElement);
    expect(resultElement).toHaveTextContent('6');
  });
  it('Result should be 53', () => {
    render(<Calculator />);
    const btn1Element = screen.getByText(/5/i);
    const btn2Element = screen.getByText(/3/i);
    const resultElement = screen.getByTestId('result-id');
    fireEvent.click(btn1Element);
    fireEvent.click(btn2Element);
    expect(resultElement).toHaveTextContent('53');
  });
});
