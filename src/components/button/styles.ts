import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { IButtonComponent } from ".";
import { ButtonVariant } from "../../models/interfaces/global/enum/buttonVariant";

export const Button = styled.TouchableOpacity<IButtonComponent>`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background: ${({ theme, variant }) =>
    variant === ButtonVariant.submit
      ? theme.colors.accent
      : variant === ButtonVariant.blank
      ? "transparent"
      : theme.colors.accent};

  border-radius: ${({ rounded }) => (rounded ? "9999px" : "4px")};

  width: ${({ width }) => (width ? `${width}` : "100%")};
  height: ${({ height }) => (height ? `${height}` : `${RFValue(48)}px`)};

  margin: ${({ margin }) => margin ?? "0"};
`;

export const Title = styled.Text<IButtonComponent>`
  color: ${({ titleColor }) => (titleColor ? titleColor : "#ffff")};
  font-size: ${({ titleSize }) => (titleSize ? `${titleSize}px` : "12px")};
  font-weight: bold;
  margin-right: 12px;
`;
