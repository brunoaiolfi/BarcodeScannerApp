import { Text } from "react-native";
import { Message } from "./styles";

interface SuccessMessageProps {
    message: string;
}
export function SuccessMessage({ message }: SuccessMessageProps) {
    return (
        <Message>
            {message}
        </Message>
    )
}