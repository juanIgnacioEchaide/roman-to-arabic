import { Container } from "@mui/material"
import { ContainerProps } from "../../model/props"

const AppContainer = ({ children }: ContainerProps): JSX.Element => {

    return(<Container 
                data-testid="app-container"
                style={{
                justifyContent: 'center ',
                alignItems: 'center',
                width: '100vw',
                padding: '30vh'
                    }}>
                {children}
            </Container>)
}

const ConverterContainer = ({ children }: ContainerProps) => {
    return( <Container
                data-testid="converter-container"
                style={{
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    }}>
                    {children}
            </Container>)

}

export { AppContainer, ConverterContainer}