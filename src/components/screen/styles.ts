import { IScreen } from "./index";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View<IScreen>`
  height: 100%;
  width: 100%;

  background-color: ${({ theme, background }) =>
    background ? background : theme.colors.background};

  padding: ${RFValue(24)}px;
`;
