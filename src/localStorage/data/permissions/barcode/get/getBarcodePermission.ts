import AsyncStorage from "@react-native-async-storage/async-storage";
import { PermissionStatus } from "expo-barcode-scanner";
import { barcodeKey } from "../../../../keys/barcode";

export async function getBarcodePermission() {
    const barcodePermission: PermissionStatus = JSON.parse(await AsyncStorage.getItem(barcodeKey) ?? "{}")
    return barcodePermission;
}