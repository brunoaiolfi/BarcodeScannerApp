import { Controller, useForm } from "react-hook-form";
import { ButtonComponent } from "../../button";
import { InputTextComponent } from "../../Inputs/TextInput";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { Container, Footer, Form, InputWrapper, Label } from "./styles";
import { useEffect } from "react";
import { ErrorMessage } from "../../errorMessage";
import { api } from "../../../services/axios/api";
import { useAuth } from "../../../hook/useAuth";
import { useNavigation } from "@react-navigation/native";

interface ISignOnProps {
    onFocus?: () => void;
}

interface ISignIn {
    email: string;
    password: string;
}

const schema = Yup.object().shape({
    email: Yup
        .string()
        .email('Digite um email válido!')
        .required('Email é obrigatório!'),

    password: Yup
        .string()
        .required('Senha é obrigatória!'),
})

export function SignIn({ onFocus }: ISignOnProps) {

    const navigation = useNavigation()

    const { signIn } = useAuth()

    const { control, handleSubmit, formState: { errors } } = useForm<ISignIn>({
        resolver: yupResolver(schema)
    });

    async function handleSignOn({ email, password }: ISignIn) {
        try {
            const loginResponse = await signIn({
                email,
                password
            })

            if (loginResponse?.token) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            }

        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Form>
                <InputWrapper>
                    <Label>
                        Email:
                    </Label>
                    {
                        errors.email?.message &&
                        <ErrorMessage message={errors.email.message} />
                    }
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { value, onChange, onBlur } }) => (
                            <InputTextComponent
                                placeholder="Preencha seu Email"
                                onFocus={onFocus}
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>
                        Senha:
                    </Label>
                    {
                        errors.password?.message &&
                        <ErrorMessage message={errors.password.message} />
                    }
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { value, onChange, onBlur } }) => (
                            <InputTextComponent
                                placeholder="Preencha sua senha"
                                secureTextEntry={true}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                            />)
                        }
                    />
                </InputWrapper>
            </Form>

            <Footer>
                <ButtonComponent
                    width="80%"
                    title="Entrar"
                    onPress={handleSubmit(handleSignOn)}
                />
            </Footer>
        </Container>
    )
}