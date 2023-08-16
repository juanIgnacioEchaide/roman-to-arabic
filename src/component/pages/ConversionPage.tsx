import { useCallback, useEffect, useState } from 'react';
import { convertRomanToArabic, isValidRomanNumeral } from '../../utils/helpers';
import ConversionTemplate from '../template/ConversionTemplate';
import { NUMBER_TOP_LIMIT } from '../../utils/constants';

const ConversionPage = () => {
  const [romanNumeral, setRomanNumeral] = useState<string>('');
  const [decimalValue, setDecimalValue] = useState<number>(0);
  const [error, setError] = useState<boolean>(false)

  const handleConvert = useCallback(() => {
    const conversion = convertRomanToArabic(romanNumeral)
      if(isNaN(conversion) || conversion >= NUMBER_TOP_LIMIT){
        setError(true);
      }
      setDecimalValue(conversion)
  }, [romanNumeral])

  const handleChange = useCallback((romanNum: string) => {
    setRomanNumeral(romanNum.toLocaleUpperCase())
  }, [])

  useEffect(() => {
    if (!isValidRomanNumeral(romanNumeral)) {
      setError(true);
    } else {
      setError(false);
      handleConvert();
    }
  }, [romanNumeral, handleConvert]);

  return (
    <ConversionTemplate  
      data-testid="conversion-page" 
      handleChange={handleChange}
      romanNumeral={romanNumeral}
      setRomanNumeral={setRomanNumeral}
      error={error}
      decimalValue={decimalValue} 
      />
  );
};

export default ConversionPage;
