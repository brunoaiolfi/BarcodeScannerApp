import { TextInput, TextInputProps, } from "react-native";
import { Input } from "./styles";

export interface IInputTextComponent extends TextInputProps {
    height?: string,
    width?: string,
    margin?: string
}


export function InputTextComponent({ onChangeText, onBlur, value, ...rest }: IInputTextComponent) {
    return (
        <Input
            value={value}
            onBlur={onBlur}
            onChangeText={onChangeText}
            {...rest}
        />
    )
}