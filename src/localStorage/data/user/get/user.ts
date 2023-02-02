import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginResponse, User } from "../../../../models/interfaces/context/auth";
import { userKey } from "../../../keys/user";

export async function getUser() {
  const user: LoginResponse = JSON.parse((await AsyncStorage.getItem(userKey)) ?? "{}");
  return user;
}
