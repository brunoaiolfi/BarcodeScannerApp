import { BarCodeScanner } from "expo-barcode-scanner";
import styled from "styled-components/native";

export const ScannerContainer = styled.View`
  position: absolute;

  width: 100%;
  height: 100%;

  z-index: 99999;

  flex: 1;
  align-items: center;

  padding: 10% 0;

  background-color: #000;
`;

export const Scanner = styled(BarCodeScanner)`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`;
