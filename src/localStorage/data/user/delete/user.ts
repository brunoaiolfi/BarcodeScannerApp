import AsyncStorage from "@react-native-async-storage/async-storage";
import { userKey } from "../../../keys/user";

export async function deleteUser() {
  await AsyncStorage.removeItem(userKey);
}
