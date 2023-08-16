import { Button } from "@mui/material"
import { ClearButtonProps } from "../../model/props"

const ClearButton = ({clearFunction}: ClearButtonProps): JSX.Element => {
    return <Button
    data-testid="clear-button"
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