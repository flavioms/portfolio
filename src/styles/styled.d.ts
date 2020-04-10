import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      black: string;
      yellow: string;
      grayLight: string;
      grayDark: string;
      blue: string;
    };
  }
}
