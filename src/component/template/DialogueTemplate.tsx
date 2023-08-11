import React, { useCallback, useState } from 'react';
import { Container, Typography, TextField, Button, Input, FormLabel } from '@mui/material';
import { isValidRomanNumeral } from '../../utils/helpers';

interface DialogTemplateProps {
  convertToArabic: (romanNum: string) => number
}

const DialogTemplate = ({ convertToArabic }:DialogTemplateProps) => {
  const [romanNumeral, setRomanNumeral] = useState<string>('');
  const [decimalValue, setDecimalValue] = useState<number>(0);
  const [error, setError] = useState<boolean>(false)

  const handleConvert = useCallback(() => {
    const conversion = convertToArabic(romanNumeral)
      setDecimalValue(conversion)
  }, [convertToArabic, romanNumeral])

  const handleChange = useCallback((e: any) => {
    setRomanNumeral(e.target.value)
    if(!isValidRomanNumeral(romanNumeral)){
      setError(true)
    }
  }, [romanNumeral])

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
          <Typography
          style={{
            fontSize: '7vh'
          }}
          >Convert <i> 'roman' </i> number:
          </Typography>
          <Input
            style={{
              marginLeft: '1vw',
              width: '30vw',
              fontSize: '4vh',
              justifyContent: 'center',
              alignItems: 'center'
            }}
              onChange={e => setRomanNumeral(e.target.value)}
              value={romanNumeral}/> 
                        <Typography
          style={{
            fontSize: '7vh'
          }}
          > into <i>'arabic'</i> number:
          </Typography>
          <Button
          style={{
            width: '30vw',
          }}
          onClick={() => setRomanNumeral('')}>
            CLEAR
          </Button>
      </Container>
    </Container>
  );
};

export default DialogTemplate;
