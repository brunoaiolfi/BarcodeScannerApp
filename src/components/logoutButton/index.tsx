import { useAuth } from "../../hook/useAuth";
import { ButtonVariant } from "../../models/interfaces/global/enum/buttonVariant";
import { ButtonComponent } from "../button";
import { LogoutIcon } from "./styles";

export function LogoutButton () {
    const {
        signOut
    } = useAuth()
    return (
        <ButtonComponent 
            width="48px"
            variant={ButtonVariant.blank}
            icon={<LogoutIcon name="logout" size={24}/>}

            onPress={signOut}
        />
    ) 
}