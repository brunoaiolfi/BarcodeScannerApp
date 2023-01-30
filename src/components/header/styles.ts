import styled from "styled-components/native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
export const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const Code = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.gray_600};
`;

export const ReturnIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.text};
`;

export const CameraIcon = styled(Feather)`
  color: #ffff;
`;
