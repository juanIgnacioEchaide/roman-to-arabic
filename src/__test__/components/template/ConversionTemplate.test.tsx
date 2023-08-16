/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import  ConversionTemplate from '../../../component/template/ConversionTemplate';

jest.mock('../../../component/atom/Container', () => ({
  AppContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="app-container">{children}</div>
  ),
  ConverterContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="converter-container">{children}</div>
  ),
}));

jest.mock('../../../component/organism/NumberConverter', () => ({
  NumberConverter: ({ handleChange, romanNumeral, setRomanNumeral, error, decimalValue }: any) => (
    <div data-testid="number-converter">
      {handleChange}, {romanNumeral}, {setRomanNumeral}, {error.toString()}, {decimalValue}
    </div>
  ),
}));

describe('ConversionTemplate', () => {
  test('renders correctly and passes props', () => {
    const mockHandleChange = jest.fn();
    const mockSetRomanNumeral = jest.fn();
    const { getByTestId } = render(
      <ConversionTemplate
        handleChange={mockHandleChange}
        romanNumeral="IV"
        setRomanNumeral={mockSetRomanNumeral}
        error={false}
        decimalValue={4}
      />
    );

    const appContainer = getByTestId('app-container');
    const converterContainer = getByTestId('converter-container');
    const numberConverter = getByTestId('number-converter');

    expect(appContainer).toBeInTheDocument();
    expect(converterContainer).toBeInTheDocument();
    expect(numberConverter).toBeInTheDocument();
  });
});
