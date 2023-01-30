import { useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useEffect, useState } from "react";
import { deleteUser } from "../localStorage/data/user/delete/user";
import { getUser } from "../localStorage/data/user/get/user";
import { setUser } from "../localStorage/data/user/set/user";
import { User } from "../models/interfaces/context/auth";
import { api } from "../services/axios/api";

interface AuthProps {
    signIn: (data: User) => Promise<User | undefined>;
    signOut: () => void;
    verifyUser: () => Promise<boolean>;
}

interface LoginResponse extends User {
    token: string;

}
export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({ children }: Children) {
    const navigation = useNavigation()

    async function signIn({ email, name, password }: User) {
        try {
            const { data } = await api.post<User>('/login', {

            })

            const user: User = {
                email,
                name,
                password
            }

            setUser(user)

            return data;
        } catch (error: any) {
            console.log(error)
        }
    }

    async function signOut() {
        await deleteUser();

        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        })

    }

    async function verifyUser() {
        const user = await getUser()
        return !!user.email
    }

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                verifyUser: verifyUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}