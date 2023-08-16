import React from 'react';
import { convertRomanToArabic, isValidRomanNumeral } from '../../utils/helpers'

describe('convertRomanToArabic function', () => {
  it('converts single Roman numerals correctly', () => {
    expect(convertRomanToArabic('I')).toBe(1);
    expect(convertRomanToArabic('V')).toBe(5);
    expect(convertRomanToArabic('X')).toBe(10);
    expect(convertRomanToArabic('L')).toBe(50);
    expect(convertRomanToArabic('C')).toBe(100);
    expect(convertRomanToArabic('D')).toBe(500);
    expect(convertRomanToArabic('M')).toBe(1000);
  });

  it('converts subtractive Roman numerals correctly', () => {
    expect(convertRomanToArabic('IV')).toBe(4);
    expect(convertRomanToArabic('IX')).toBe(9);
    expect(convertRomanToArabic('XL')).toBe(40);
    expect(convertRomanToArabic('XC')).toBe(90);
    expect(convertRomanToArabic('CD')).toBe(400);
    expect(convertRomanToArabic('CM')).toBe(900);
  });

  it('converts complex Roman numerals correctly', () => {
    expect(convertRomanToArabic('III')).toBe(3);
    expect(convertRomanToArabic('XIV')).toBe(14);
    expect(convertRomanToArabic('XXIX')).toBe(29);
    expect(convertRomanToArabic('CXXIII')).toBe(123);
    expect(convertRomanToArabic('CDXLIV')).toBe(444);
    expect(convertRomanToArabic('CMXCIX')).toBe(999);
    expect(convertRomanToArabic('MCMXCIV')).toBe(1994);
  });
});


describe('isValidRomanNumeral', () => {
  it('should return true for a valid Roman numeral', () => {
    expect(isValidRomanNumeral('III')).toBe(true);
    expect(isValidRomanNumeral('IX')).toBe(true);
    expect(isValidRomanNumeral('XLII')).toBe(true);
    expect(isValidRomanNumeral('XC')).toBe(true);
    expect(isValidRomanNumeral('CDXLIV')).toBe(true);
    expect(isValidRomanNumeral('CM')).toBe(true);
    expect(isValidRomanNumeral('MMMCMXCIX')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isValidRomanNumeral('')).toBe(false);
  });

  it('should return false for a string with invalid characters', () => {
    expect(isValidRomanNumeral('ABC')).toBe(false);
    expect(isValidRomanNumeral('123')).toBe(false);
    expect(isValidRomanNumeral('XYZ')).toBe(false);
  });

});