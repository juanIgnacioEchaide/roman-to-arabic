import { Button } from "@mui/material"

interface ClearButtonProps {
    clearFunction: (value: React.SetStateAction<string>) => void
}

const ClearButton = ({clearFunction}: ClearButtonProps): JSX.Element => {
    return <Button
    style={{
      width: '30vw',
      fontSize: '3vh',
      marginTop: '7vh'
    }}
    onClick={() => clearFunction('')}>
      CLEAR
    </Button>
}

export { ClearButton }