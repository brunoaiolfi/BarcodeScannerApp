import "styled-components";

declare module "styled-components" {
  interface DesignSystem {
    accent: string;
    info: string;

    danger: string;
    warning: string;
    success: string;

    default: string;

    detail: string;
    background: string;

    text: string;
    subtext: string;

    gray_900: string;
    gray_800: string;
    gray_700: string;
    gray_600: string;
    gray_500: string;
    gray_400: string;
    gray_300: string;
    gray_200: string;
    gray_100: string;
  }

  export interface DefaultTheme {
    colors: DesignSystem;
  }
}
