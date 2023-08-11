import React, { createContext, useContext, useState } from 'react';
import { convertRomanToArabic } from '../utils/helpers';

interface ConversionContextState {
  inputValue: string
  outputValue: number
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  handleInputChange: (input: string) => void
}

const defaultValue: ConversionContextState = {
  inputValue: '',
  outputValue: 0,
  setInputValue: () => {},
  handleInputChange:  () => {}
}

const ConversionContext = createContext(defaultValue);

const useConversionContext = () => {
  const context = useContext(ConversionContext);
  if (!context) {
    throw new Error('ConversionProvider not found');
  }
  return context;
};

const ConversionProvider = ({ children }: any) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<number>(0);

  const handleInputChange = (input: string) => {
    setInputValue(input);
    if (input) {
      const arabicValue = convertRomanToArabic(input);
      setOutputValue(arabicValue);
    } else {
      setOutputValue(0);
    }
  };

  return (
    <ConversionContext.Provider value={{ inputValue, setInputValue, outputValue, handleInputChange }}>
      {children}
    </ConversionContext.Provider>
  );
};

export { useConversionContext, ConversionProvider };
