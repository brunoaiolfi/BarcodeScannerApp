import styled from "styled-components/native";

export const Message = styled.Text`
    font-size: 12px;
    color: ${({theme}) => theme.colors.danger};
    font-weight: 600;
`;