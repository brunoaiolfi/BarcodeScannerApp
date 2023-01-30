import { SimpleLineIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const LogoutIcon = styled(SimpleLineIcons)`
  color: ${({ theme }) => theme.colors.danger};
`;
