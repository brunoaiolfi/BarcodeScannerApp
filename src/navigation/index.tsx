import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../contexts/authContext";
import { IndexRoute } from "./routes/index.routes";

export function NavigationIndex() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <IndexRoute />
            </AuthProvider>
        </NavigationContainer>
    )
}