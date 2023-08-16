/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NumberConverter } from '../../../component/organism/NumberConverter';

jest.mock('../../../component/atom/Button', () => ({
  ClearButton: ({ clearFunction }: { clearFunction: () => void }) => (
    <button data-testid="clear-button" onClick={clearFunction}>
      CLEAR
    </button>
  ),
}));

jest.mock('../../../component/atom/RomanInput', () => ({
  RomanInput: ({ handleChange, romanNumeral }: any) => (
    <input data-testid="roman-input" onChange={(e) => handleChange(e.target.value)} value={romanNumeral} />
  ),
}));

jest.mock('../../../component/atom/Title', () => ({
  UpperTitle: () => <div data-testid="upper-title">Upper Title</div>,
  LowerTitle: () => <div data-testid="lower-title">Lower Title</div>,
  ErrorTitle: () => <div data-testid="error-title">Error Title</div>,
  OutputTitle: ({ decimalValue }: { decimalValue: number }) => (
    <div data-testid="output-title">{decimalValue}</div>
  ),
}));

describe('NumberConverter', () => {
  test('renders and interacts correctly', () => {
    const mockHandleChange = jest.fn();
    const mockSetRomanNumeral = jest.fn();
    const { getByTestId } = render(
      <NumberConverter
        handleChange={mockHandleChange}
        romanNumeral="IV"
        setRomanNumeral={mockSetRomanNumeral}
        error={false}
        decimalValue={4}
      />
    );

    const upperTitle = getByTestId('upper-title');
    const romanInput = getByTestId('roman-input');
    const lowerTitle = getByTestId('lower-title');
    const outputTitle = getByTestId('output-title');
    const clearButton = getByTestId('clear-button');

    expect(upperTitle).toBeInTheDocument();
    expect(romanInput).toBeInTheDocument();
    expect(lowerTitle).toBeInTheDocument();
    expect(outputTitle).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();

    // Simulate user interactions
    fireEvent.change(romanInput, { target: { value: 'V' } });
    fireEvent.click(clearButton);

    expect(mockHandleChange).toHaveBeenCalledWith('V');
    expect(mockSetRomanNumeral).toHaveBeenCalled();
  });
});
