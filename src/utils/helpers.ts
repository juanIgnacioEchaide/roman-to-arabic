import { SymbolInfo } from "../model/utils";
import { RomanNumerals, symbols } from "./constants";

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
    const symbolIndexMap: { [key: string]: number } = {};
    symbols.forEach((symbol, index) => {
      symbolIndexMap[symbol.symbol] = index;
    });
  
    const isValidOrder = romanNumeral.split('').every((symbol, index, array) => {
      const currentIndex = symbolIndexMap[symbol];
      const prevIndex = symbolIndexMap[array[index - 1]];
  
      return index === 0 || currentIndex >= prevIndex;
    });
  
    if (!isValidOrder) {
      return false;
    }
  
    const validSymbols = symbols.map(symbol => symbol.symbol);
    const isValidSymbol = (symbol: string) => validSymbols.includes(symbol);
  
    const isValidCharacter = (char: string) => {
      return char.split('').every(isValidSymbol);
    };
  
    return romanNumeral.length > 0 && isValidCharacter(romanNumeral);
  };
  