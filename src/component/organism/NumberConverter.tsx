import { NumberConverterProps } from "../../model/props"
import { ClearButton } from "../atom/Button"
import { RomanInput } from "../atom/RomanInput"
import { UpperTitle, LowerTitle, ErrorTitle, OutputTitle } from "../atom/Title"


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