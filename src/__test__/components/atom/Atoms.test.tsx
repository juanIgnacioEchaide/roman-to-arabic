/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ClearButton } from '../../../component/atom/Button';
import { RomanInput } from '../../../component/atom/RomanInput';
import { ErrorTitle, LowerTitle, OutputTitle, UpperTitle } from '../../../component/atom/Title';

describe('Atom componetns', () => {
  test('ClearButton calls clearFunction on button click', () => {
    const mockClearFunction = jest.fn();
    const { getByTestId } = render(<ClearButton clearFunction={mockClearFunction} />);
    
    const clearButton = getByTestId("clear-button");
    fireEvent.click(clearButton);
    
    expect(mockClearFunction).toHaveBeenCalledWith('');
  });

  test('RomanInput calls handleChange on input change', () => {
    const mockHandleChange = jest.fn();
    const { getByRole } = render(<RomanInput handleChange={mockHandleChange} romanNumeral="" />);

    const input = getByRole('textbox'); // Find input by its role
    fireEvent.change(input, { target: { value: 'IV' } });

    expect(mockHandleChange).toHaveBeenCalledWith('IV');
  });

  test('RomanInput renders input with provided value', () => {
    const { getByDisplayValue } = render(<RomanInput handleChange={() => {}} romanNumeral="V" />);
    const input = getByDisplayValue('V');
    expect(input).toBeInTheDocument();
  });

  test('UpperTitle renders the upper title correctly', () => {
    const { getByTestId } = render(<UpperTitle />);
    expect(getByTestId('upper-title')).toBeInTheDocument();
  });

  test('LowerTitle renders the lower title correctly', () => {
    const { getByTestId } = render(<LowerTitle />);
    expect(getByTestId('lower-title')).toBeInTheDocument();
  });

  test('ErrorTitle renders the error title correctly', () => {
    const { getByTestId } = render(<ErrorTitle />);
    expect(getByTestId('error-title')).toBeInTheDocument();
  });   

  test('OutputTitle renders the output title with decimal value', () => {
    const { getByTestId } = render(<OutputTitle decimalValue={42} />);
    expect(getByTestId('output-title')).toBeInTheDocument();
  });
});
