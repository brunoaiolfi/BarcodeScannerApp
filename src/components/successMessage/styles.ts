import styled from "styled-components/native";

export const Message = styled.Text`
    font-size: 12px;
    color: ${({theme}) => theme.colors.success};
    font-weight: 600;
`;