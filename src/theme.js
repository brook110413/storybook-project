import { createTheme } from '@material-ui/core/styles';

export const COLORS = {
  white: '#fff',
  yellow: '#f7cd3d',
  lightYellow: '#FDF0C4',
  lightestYellow: '#FEFAEB',
  gray: '#A1A1A1',
  lightGray: '#D9D9D9',
  lightestGray: '#F5F5F5',
  blue: '#1E7BAC',
  red: '#D0021B',
  lightRed: '#F16849',
  dark: '#434343',
};

const theme = createTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        subtitle1: 'p',
        subtitle2: 'p',
      },
    },
  },
  palette: {
    common: {
      yellow: COLORS.yellow,
      lightYellow: COLORS.lightYellow,
      lightestYellow: COLORS.lightestYellow,
      gray: COLORS.gray,
      lightGray: COLORS.lightGray,
      lightestGray: COLORS.lightestGray,
      blue: COLORS.blue,
      red: COLORS.red,
      lightRed: COLORS.lightRed,
      dark: COLORS.dark,
    },
    background: {
      default: COLORS.white,
    },
    primary: {
      main: COLORS.yellow,
      light: COLORS.lightYellow,
    },
    error: {
      main: COLORS.red,
    },
    text: {
      primary: COLORS.dark,
    },
  },
});

export default theme;
