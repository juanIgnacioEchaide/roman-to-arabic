import { Container } from '@mui/material';
import { NumberConverter, NumberConverterProps } from '../organism/NumberConverter';

const ConversionTemplate = ({   
      handleChange, 
      romanNumeral, 
      setRomanNumeral,
      error, 
      decimalValue 
    }: NumberConverterProps) => {

  return (
    <Container 
      style={{
        justifyContent: 'center ',
        alignItems: 'center',
        width: '100vw',
        padding: '30vh'
      }}>
      <Container
        style={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <NumberConverter
            decimalValue={decimalValue}
            error={error}
            handleChange={handleChange}
            romanNumeral={romanNumeral}
            setRomanNumeral={setRomanNumeral}
          />
        </Container>
    </Container>
  );
};

export default ConversionTemplate;
