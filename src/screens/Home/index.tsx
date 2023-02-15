import { ButtonComponent } from "../../components/button";
import { InputTextComponent } from "../../components/Inputs/TextInput";
import { Screen } from "../../components/screen";
import { ButtonVariant } from "../../models/interfaces/global/enum/buttonVariant";
import { CameraIcon, Container, Footer, Span, UserWellcome } from "./styles";

export function Home() {
  return (
    <Screen>
      <Container>
        <UserWellcome>
          Olá {`\n`}
          <Span>Usuário.</Span>
        </UserWellcome>

        <Footer>
          <InputTextComponent
            keyboardType="number-pad"
            placeholder="Código do produto"
          />
          <ButtonComponent
            variant={ButtonVariant.blank}
            icon={<CameraIcon name="barcode" size={24} />}
            margin="16px 0px"
          />

          <ButtonComponent title="Pesquisar" />
        </Footer>
      </Container>
    </Screen>
  );
}
