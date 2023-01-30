import { ReactNode } from "react";
import { Container } from "./styles";

export interface IScreen {
    background?: string;
    children: ReactNode;
}

export function Screen({ children, background }: IScreen) {
    return (
        <Container
            background={background}
        >
            {children}
        </Container>
    )
}