import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const InfoModalBackground = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoModalContainer = styled.View`
  width: 90%;
  min-height: 30%;
  max-height: 80%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
`;

export const InfoModalHeader = styled.Pressable`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.detail};

  display: flex;
  flex-direction: row;

  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  height: 48px;
`;

export const InfoModalEventData = styled.Text`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray_600};
  font-weight: 700;
`;

export const InfoModalCloseButton = styled.TouchableOpacity`
  width: 64px;
  height: 100%;

  align-items: flex-end;
  justify-content: center;

  padding: 0 8px;
`;

export const InfoModalCloseIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.danger};
`;

export const InfoModalDataContainer = styled.View`
  width: 100%;
  padding: 16px;
`;
