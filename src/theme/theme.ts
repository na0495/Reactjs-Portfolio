import { theme } from "@chakra-ui/react";
// import customIcons from './IconPaths';
import customColors from "./CustomColors";

const customTheme: any = {
  ...theme,
  // icons: {
  //   ...theme.icons,
  //   // ...customIcons
  // },
  colors: {
    ...theme.colors,
    ...customColors,
  },
  fonts: {
    body: "Inter var, sans-serif",
    heading: "Inter var, sans-serif",
    mono: "Fira Code, monospace",
  },
  space: {
    0: "0",
    1: "0.125rem",
    2: "0.25rem",
    3: "0.5rem",
    4: "1rem",
    5: "1.5rem",
    6: "2rem",
    8: "2.5em",
    10: "3rem",
    11: "3.5rem",
    12: "4rem",
    16: "6rem",
    20: "8rem",
    24: "11rem",
    32: "16rem",
  },
};

export default customTheme;
