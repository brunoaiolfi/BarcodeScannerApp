import styled from "styled-components/native";

export const WelcomeMessage = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_600};
`;

export const UserName = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_600};
`;
