import { RomanNumerals } from "./constants";

export const convertRomanToArabic = (romanNumeral: string): number => {
    const decimalValues = romanNumeral.split('').map((symbol) => RomanNumerals[symbol]);
  
    const shouldSubtract = (value: number, nextValue: number | undefined) =>
      nextValue !== undefined && value < nextValue;
  
    const subtract = (acc: number, value: number) => acc - value;
    const add = (acc: number, value: number) => acc + value;
  
    const calculateValue = (acc: number, value: number, index: number, array: number[]) =>
      shouldSubtract(value, array[index + 1]) ? subtract(acc, value) : add(acc, value);
  
    const decimalNumber = decimalValues.reduceRight(calculateValue, 0);
  
    return decimalNumber;
  };
  
  export const isValidRomanNumeral = (romanNumeral: string): boolean => {
    const validSymbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  
    const symbolIndexMap: { [key: string]: number } = {};
    validSymbols.forEach((symbol, index) => {
      symbolIndexMap[symbol] = index;
    });
  
    const isValidOrder = romanNumeral.split('').every((symbol, index, array) => {
      const currentIndex = symbolIndexMap[symbol];
      const prevIndex = symbolIndexMap[array[index - 1]];
  
      // Check if the current symbol is greater than or equal to the previous symbol
      return index === 0 || currentIndex >= prevIndex;
    });
  
    return isValidOrder;
  };
