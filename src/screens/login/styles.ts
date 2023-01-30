import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export interface IIsSelected {
  isSelected: boolean;
}

export interface FormOnFocus {
  isFormInFocus: boolean;
}


export const Header = styled.View`
  background: black;

  height: 30%;
  width: 100%;
`;

export const Container = styled.View`
  height: 100%;
  width: 100%;

  background: black;
`;

export const ContainerForms = styled.View<FormOnFocus>`
  height: 100%;
  width: 100%;

  background: ${({ theme }) => theme.colors.background};

  border-top-left-radius: ${({ isFormInFocus }) =>
    isFormInFocus ? 0 : "12px"};
  border-top-right-radius: ${({ isFormInFocus }) =>
    isFormInFocus ? 0 : "12px"};

  padding: 16px;
`;

export const Forms = styled.View`
  height: 100%;
  width: 100%;
`;

export const ContainerHeader = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-around;

  margin-bottom: 16px;
`;

export const PageSelectButton = styled.TouchableOpacity`
  width: 45%;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 8px;
`;

export const Underline = styled.View`
  width: 32px;

  border: 0px solid ${({ theme }) => theme.colors.accent};
  border-bottom-width: 2px;
`;

export const PageSelectText = styled.Text<IIsSelected>`
  margin-bottom: 12px;

  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};

  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.accent : theme.colors.gray_600};
`;
