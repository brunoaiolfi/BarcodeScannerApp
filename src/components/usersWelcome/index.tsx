import { Text } from "react-native";
import { UserName, WelcomeMessage } from "./styles";

export function UsersWelcome() {
    return (
        <WelcomeMessage>
            Olá,{`\n`}
            <UserName>
                Usuário
            </UserName>
        </WelcomeMessage>
    )
}