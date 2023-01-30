import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonVariant } from "../../models/interfaces/global/enum/buttonVariant";
import { Button, Title } from "./styles";

export interface IButtonComponent extends TouchableOpacityProps {
    title?: string,
    titleSize?: number,
    titleColor?: string,
    rounded?: boolean,
    height?: string,
    width?: string,
    variant?: ButtonVariant,
    margin?: string
    icon?: ReactNode;
    children?: ReactNode;
}

export function ButtonComponent({ title, children, icon, ...rest }: IButtonComponent) {
    return (
        <Button
            {...rest}
            activeOpacity={0.8}
        >
            {
                title &&
                <Title
                    {...rest}
                >
                    {title}
                </Title>
            }

            {icon}
            {children}
        </Button>
    )
}