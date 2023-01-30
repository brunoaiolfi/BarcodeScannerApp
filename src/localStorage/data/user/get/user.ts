import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../../../models/interfaces/context/auth";
import { userKey } from "../../../keys/user";

export async function getUser() {
  const user: User = JSON.parse((await AsyncStorage.getItem(userKey)) ?? "{}");
  return user;
}
