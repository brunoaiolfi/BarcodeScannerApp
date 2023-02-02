import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Form = styled.View``;

export const InputWrapper = styled.View`
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  
  margin-bottom: 8px;

  font-size: 12px;
  font-weight: 500;
`;

export const Footer = styled.View`
  margin-top: 32px;

  display: flex;
  align-items: center;
`;
