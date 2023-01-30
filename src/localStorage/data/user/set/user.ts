import { User } from "./../../../../models/interfaces/context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userKey } from "../../../keys/user";

export async function setUser(user: User) {
  await AsyncStorage.setItem(userKey, JSON.stringify(user));
  return user;
}
