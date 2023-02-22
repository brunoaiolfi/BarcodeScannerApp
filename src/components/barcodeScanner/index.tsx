import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { getBarcodePermission } from "../../localStorage/data/permissions/barcode/get/getBarcodePermission";
import { ButtonComponent } from "../button";
import { Scanner, ScannerContainer } from "./styles";

interface BarcodeScannerComponentProps {
  callback: (value: BarCodeEvent) => any;
  handleClose: () => void;
}

export function BarcodeScannerComponent({
  callback,
  handleClose,
}: BarcodeScannerComponentProps) {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const permissionSaved = await getBarcodePermission()
      if (!permissionSaved) {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      }
    };

    getBarCodeScannerPermissions();
  }, []);

  return !hasPermission ? (
    <></>
  ) : (
    <ScannerContainer>
      <Scanner onBarCodeScanned={(data) => callback(data)} />
      <ButtonComponent
        title="Fechar"
        titleSize={16}
        margin="auto 0 0 0"
        width="80%"
        onPress={handleClose}
      />
    </ScannerContainer>
  );
}
