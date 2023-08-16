import React from 'react'
import { Input } from '@mui/material';
import { RomanInputProps } from '../../model/props';

const RomanInput = ({ handleChange, romanNumeral }: RomanInputProps) => {
  return <Input
          data-testid="roman-input"
          style={{
            marginLeft: '1vw',
            width: '30vw',
            fontSize: '4vh',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onChange={e => handleChange(e.target.value)}
          value={romanNumeral}
          /> 
}

export { RomanInput }