import { createGlobalStyle } from "styled-components";

interface ThemeProps {
  body: string;
}

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const lightTheme = {
  body: "#F4F7FD",
  headerColor: "#fff",
  titleColor: "#000112",
  subTitleColor: "#828FA3",
  inputTextColor: "#000112",
  poppedWindowColor: "#fff",
  addButtonColor: "rgba(99, 95, 199, 0.1)",
  addButtonColorHover: "rgba(99, 95, 199, 0.25);",
  borderColor: "#E4EBFA",
  hideTaskBarHover: "#2B2C37",
  taskColor: "#fff",
};

export const darkTheme = {
  body: "#20212C",
  headerColor: "#2B2C37",
  titleColor: "#fff",
  subTitleColor: "#fff",
  inputTextColor: "#fff",
  poppedWindowColor: "#2B2C37",
  addButtonColor: "#fff",
  addButtonColorHover: "#fff",
  borderColor: "#3E3F4E",
  hideTaskBarHover: "#fff",
  taskColor: "#2B2C37",
};

export const GlobalStyles = createGlobalStyle`

body {
  background: ${(props: GlobalThemeProps) => props.theme.body};
  transition: all 0.3s;
}

`;
