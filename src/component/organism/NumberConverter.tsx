import { ClearButton } from "../atom/Button"
import { RomanInput } from "../atom/Input"
import { UpperTitle, LowerTitle, ErrorTitle, OutputTitle } from "../atom/Title"

export interface NumberConverterProps {
    handleChange: (romanNum: string) => void, 
    romanNumeral: string, 
    setRomanNumeral: React.Dispatch<React.SetStateAction<string>>,
    error: boolean, 
    decimalValue: number,
}

const NumberConverter = ({
    handleChange, 
    romanNumeral, 
    setRomanNumeral,
    error, 
    decimalValue
}: NumberConverterProps)=> {
    return  <>
                <UpperTitle />
                <RomanInput handleChange={handleChange} romanNumeral={romanNumeral}/> 
                <LowerTitle />
                {error && decimalValue !== 0 ? 
                <ErrorTitle /> : 
                <OutputTitle decimalValue={decimalValue} />
                }
                <ClearButton clearFunction={setRomanNumeral} />
            </>
}

export { NumberConverter }