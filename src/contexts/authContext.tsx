import { useNavigation } from "@react-navigation/native";
import { isAfter } from "date-fns";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";
import { deleteUser } from "../localStorage/data/user/delete/user";
import { getUser } from "../localStorage/data/user/get/user";
import { setUser } from "../localStorage/data/user/set/user";
import { LoginResponse } from "../models/interfaces/context/auth";
import { api } from "../services/axios/api";

interface AuthProps {
  userLogged?: LoginResponse;
  setUserlogged: (value: LoginResponse) => void;
  signIn: (data: signIn) => Promise<LoginResponse | undefined>;
  signOut: () => void;
  verifyToken: (userInfos: LoginResponse) => void;
}

interface signIn {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({ children }: Children) {
  const [userLogged, setUserlogged] = useState<LoginResponse>();

  const navigation = useNavigation();

  useEffect(() => {
    async function getUserInfosFromAsyncStorageAndVerifyToken() {
      const tempUserLogged = await getUser();

      if (tempUserLogged?.token) {
        verifyToken(tempUserLogged);
      }
    }

    getUserInfosFromAsyncStorageAndVerifyToken();
  }, []);

  async function signIn({ email, password }: signIn) {
    try {
      const { data } = await api.post<LoginResponse>("/login", {
        email,
        password,
      });

      const { token } = data;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUserlogged(data);
      setUser(data);

      return data;
    } catch (error: any) {
      if (error.response.status === 404) {
        Alert.alert(
          "Nenhum usuário encontrado!",
          "Verifique se você preencheu tudo corretamente!"
        );
      }
    }
  }

  async function signOut() {
    await deleteUser();

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }

  /**
   *
   * @param userInfos Dados do usuário
   *
   * Função de verificar a validade do token
   */

  function verifyToken(userInfos: LoginResponse) {
    // Armazena quadno que o usuário logou
    const tempLoggedAt = new Date(userInfos.loggedAt);

    // Armazena quadno que o token vai expirar
    const whenTokenExpire = tempLoggedAt.setHours(
      tempLoggedAt.getHours() + userInfos.expireIn
    );

    // Caso o token vá expirar depois da data atual, então o token ainda é válido
    if (isAfter(whenTokenExpire, new Date())) {
      // Se o token ainda é válido, então faz o set do usuário
      setUserlogged(userInfos);
      console.log("token válido!");
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } else {
      // Caso o token já tenha expirado, então faz o logout
      signOut();
      console.log("token inválido!");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        userLogged,
        setUserlogged,
        signIn,
        signOut,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
