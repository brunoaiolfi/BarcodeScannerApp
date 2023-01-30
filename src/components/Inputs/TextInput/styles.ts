import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { IInputTextComponent } from ".";

export const Input = styled.TextInput.attrs<IInputTextComponent>((props) => ({
  placeholderTextColor: props.theme.colors.gray_400,
  placeholderFontSize: 14,
}))`
  color: ${({ theme }) => theme.colors.gray_600};
  font-size: 14px;
  font-weight: 400;

  background: ${({ theme }) => theme.colors.detail};

  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  border-radius: 8px;

  width: ${({ width }) => (width ? `${width}` : "100%")};
  height: ${({ height }) => (height ? `${height}` : `${RFValue(48)}px`)};

  padding: 4px 8px;
`;
