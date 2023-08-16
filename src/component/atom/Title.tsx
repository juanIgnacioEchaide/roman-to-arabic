import React from 'react'
import { Typography } from "@mui/material";
import { COLOR, FONT_SIZE } from "../../utils/constants";

const UpperTitle = (): JSX.Element =>  {

    return  <Typography
                style={{
                    fontSize: FONT_SIZE.TITLE,
                    paddingTop: '1vh'
                }}
            >
                Convert <i> 'roman' </i> number:
            </Typography>
    }


const LowerTitle = (): JSX.Element =>  {

    return <Typography
            style={{
            fontSize: FONT_SIZE.TITLE,
            }}
            > 
            into <i>'arabic'</i> number:
            </Typography>
    }

const ErrorTitle = (): JSX.Element =>  {

    return <Typography
            style={{
            fontSize: FONT_SIZE.TITLE,
            color: COLOR.ERROR
            }}
            > 
            Please insert a valid roman number
            </Typography>
    }
    
interface OutputTitleProps {
    decimalValue: number
}

const OutputTitle = ({ decimalValue }: OutputTitleProps) => {
    return <Typography
            style={{
            fontSize: FONT_SIZE.TITLE,
            color: 'blue',
            marginTop: '3vh',
            }}
            >
                {decimalValue} 
            </Typography>
}

export { LowerTitle, UpperTitle, ErrorTitle, OutputTitle }