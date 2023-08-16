export const RomanNumerals: Record<string, number> = {
    I: 1,
    IV : 4,
    V : 5,
    IX : 9,
    X : 10,
    XL : 40,
    L : 50,
    XC : 90,
    C : 100,
    CD : 400,
    D : 500,
    CM : 900,
    M : 1000,
  };

 export const SymbolsOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

export enum MESSAGE {
  ERROR = 'ERROR',
  INFO = 'INFO'
}

export enum COLOR {
  PRIMARY = 'black',
  ERROR = 'red',
}

export enum FONT_SIZE {
  TITLE = '7vh'
}
export const Wording = {
  errorMessage: 'Is not a valid roman number. Try again'
}