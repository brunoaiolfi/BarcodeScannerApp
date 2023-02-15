import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
export const Container = styled.KeyboardAvoidingView`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-between;

  height: 100%;
  width: 100%;
`;

export const UserWellcome = styled.Text`
  font-size: 22px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const Span = styled.Text`
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray_600};
`;

export const Footer = styled.View`
  width: 100%;
`;

export const CameraIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.accent};
`;
