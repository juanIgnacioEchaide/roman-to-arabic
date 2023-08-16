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
  
    let prevIndex = -1;
    let repeatCount = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const symbol = romanNumeral[i];
      const currentIndex = symbolIndexMap[symbol];
  
      if (currentIndex === undefined) {
        return false;
      }
  
      if (currentIndex < prevIndex) {
        if (
          (currentIndex === symbolIndexMap['I'] && prevIndex !== symbolIndexMap['V'] && prevIndex !== symbolIndexMap['X']) ||
          (currentIndex === symbolIndexMap['X'] && prevIndex !== symbolIndexMap['L'] && prevIndex !== symbolIndexMap['C']) ||
          (currentIndex === symbolIndexMap['C'] && prevIndex !== symbolIndexMap['D'] && prevIndex !== symbolIndexMap['M'])
        ) {
          return false;
        }
        repeatCount = 0; // Move this line outside of the "if" block
      } else {
        repeatCount = currentIndex === prevIndex ? repeatCount + 1 : 0;
  
        if (repeatCount > 2) {
          return false;
        }
      }
      prevIndex = currentIndex;
    }
  
    return true;
  };
  
  