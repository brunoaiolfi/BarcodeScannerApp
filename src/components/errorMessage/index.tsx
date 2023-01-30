import { Text } from "react-native";
import { Message } from "./styles";

interface ErrorMessageProps {
    message: string;
}
export function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <Message>
            {message}
        </Message>
    )
}