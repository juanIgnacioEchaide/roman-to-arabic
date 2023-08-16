import { ReactNode } from "react"

export interface ClearButtonProps {
    clearFunction: (value: React.SetStateAction<string>) => void
}

export interface ContainerProps {
    children: ReactNode
}

export interface RomanInputProps {
  handleChange: (romanNum: string) => void
  romanNumeral: string
}

export interface NumberConverterProps {
    handleChange: (romanNum: string) => void, 
    romanNumeral: string, 
    setRomanNumeral: React.Dispatch<React.SetStateAction<string>>,
    error: boolean, 
    decimalValue: number,
}