import { BarCodeEvent } from "expo-barcode-scanner";
import { ButtonComponent } from "../button";
import { Scanner, ScannerContainer } from "./styles";

interface BarcodeScannerComponentProps {
    callback: (value: BarCodeEvent) => any;
    handleClose: () => void;
}

export function BarcodeScannerComponent({ callback, handleClose, }: BarcodeScannerComponentProps) {

    return (
        <ScannerContainer>
            <Scanner
                onBarCodeScanned={(data) => callback(data)}
            />
            <ButtonComponent
                title="Fechar"
                titleSize={16}
                margin="auto 0 0 0"
                width="80%"
                onPress={handleClose}
            />
        </ScannerContainer>
    )
}