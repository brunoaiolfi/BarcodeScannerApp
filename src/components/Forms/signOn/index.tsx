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
import { User } from "../../../models/interfaces/context/auth";
import { useNavigation } from "@react-navigation/native";

interface ISignOnProps {
    onFocus?: () => void;
}

interface ISignOn {
    name: string;
    email: string;
    password: string;
}


const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório!'),

    email: Yup
        .string()
        .email('Digite um email válido!')
        .required('Email é obrigatório!'),

    password: Yup
        .string()
        .required('Senha é obrigatória!'),
})


export function SignOn({ onFocus }: ISignOnProps) {

    const navigation = useNavigation()

    const { signIn } = useAuth()
    const { control, handleSubmit, formState: { errors } } = useForm<ISignOn>({
        resolver: yupResolver(schema)
    });

    async function handleSignOn({ email, name, password }: ISignOn) {
        try {
            const { data } = await api.post<User>('/user', {
                email, name, password
            })
            if (data.email) {
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
                        Nome completo:
                    </Label>
                    {
                        errors.name?.message &&
                        <ErrorMessage message={errors.name.message} />
                    }
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { value, onChange, onBlur } }) => (
                            <InputTextComponent
                                placeholder="Preencha seu nome"
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
                    title="Cadastrar-se"
                    onPress={handleSubmit(handleSignOn)}
                />
            </Footer>
        </Container>
    )
}