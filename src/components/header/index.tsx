import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { ButtonVariant } from "../../models/interfaces/global/enum/buttonVariant";
import { ButtonComponent } from "../button";
import { CameraIcon, Code, Container, ReturnIcon } from "./styles";

interface HeaderProps {
    barcode: string;
}
export function Header({ barcode }: HeaderProps) {

    const navigate = useNavigation()

    return (
        <Container>
            <ButtonComponent
                onPress={() => navigate.navigate('Home')}
                variant={ButtonVariant.blank}

                width="48px"
                height="48px"
                rounded={true}

                icon={<ReturnIcon name="keyboard-arrow-left" size={28} />}
            />
            <Code>
                {barcode}
            </Code>
            <View></View>
        </Container>
    )
}