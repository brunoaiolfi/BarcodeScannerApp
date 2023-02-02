import { useCallback, useState } from "react";
import { SignIn } from "../../components/Forms/signIn";
import { SignOn } from "../../components/Forms/signOn";
import { Screen } from "../../components/screen";
import { Container, ContainerForms, ContainerHeader, Forms, Header, PageSelectButton, PageSelectText, Underline } from "./styles";

enum PageInUse {
    signOn = "signOn",
    signIn = "signIn"
}

export function Login() {

    const [pageInUse, setPageInUse] = useState<PageInUse>(PageInUse.signOn)
    const [formOnFocus, setFormOnFocus] = useState(false)

    const changePageInUse = useCallback((pageToUse: PageInUse) => {
        setPageInUse(pageToUse)
    }, [])

    const formInFocus = useCallback(() => {
        setFormOnFocus(true)
    }, [])

    return (
        <Container>
            {
                !formOnFocus && <Header />
            }
            <ContainerForms isFormInFocus={formOnFocus}>
                <ContainerHeader>

                    <PageSelectButton
                        onPress={() => changePageInUse(PageInUse.signOn)}
                    >
                        <PageSelectText
                            isSelected={pageInUse === PageInUse.signOn}
                        >
                            Cadastrar-se
                        </PageSelectText>

                        {
                            pageInUse === PageInUse.signOn &&
                            <Underline />
                        }
                    </PageSelectButton>

                    <PageSelectButton
                        onPress={() => changePageInUse(PageInUse.signIn)}
                    >
                        <PageSelectText
                            isSelected={pageInUse === PageInUse.signIn}
                        >
                            Entrar
                        </PageSelectText>
                        {
                            pageInUse === PageInUse.signIn &&
                            <Underline />
                        }
                    </PageSelectButton>

                </ContainerHeader>

                <Forms>
                    {
                        pageInUse === PageInUse.signOn ?
                            <SignOn
                                onFocus={formInFocus}
                            /> :
                            <SignIn
                                onFocus={formInFocus}
                            />
                    }
                </Forms>

            </ContainerForms>
        </Container>
    )
}