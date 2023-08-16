import { NumberConverter, NumberConverterProps } from '../organism/NumberConverter';
import { AppContainer, ConverterContainer } from '../atom/Container';

const ConversionTemplate = ({   
      handleChange, 
      romanNumeral, 
      setRomanNumeral,
      error, 
      decimalValue 
    }: NumberConverterProps) => {

  return (
    <AppContainer>
      <ConverterContainer>
          <NumberConverter
            data-testid="conversion-template" 
            decimalValue={decimalValue}
            error={error}
            handleChange={handleChange}
            romanNumeral={romanNumeral}
            setRomanNumeral={setRomanNumeral}
          />
        </ConverterContainer>
    </AppContainer>
  );
};

export default ConversionTemplate;
