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

theme.typography = {
  ...theme.typography,
  h1: {
    // fontFamily:
    //     FONTFAMILY_HEADER_MAPPING[lang] ||
    //     FONTFAMILY_HEADER_MAPPING[LANG.US],
    letterSpacing: 0,
    fontWeight: 500,
    fontSize: '32px',
    lineHeight: '42px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '30px',
    },
  },
  h2: {
    // fontFamily:
    //     FONTFAMILY_HEADER_MAPPING[lang] ||
    //     FONTFAMILY_HEADER_MAPPING[LANG.US],
    letterSpacing: 0,
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '26px',
    },
  },
  h3: {
    // fontFamily:
    //     FONTFAMILY_HEADER_MAPPING[lang] ||
    //     FONTFAMILY_HEADER_MAPPING[LANG.US],
    letterSpacing: 0,
    fontWeight: 500,
    fontSize: '21px',
    lineHeight: '25px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '23px',
    },
  },
  // p1
  body1: {
    // fontFamily:
    //     FONTFAMILY_NORMAL_MAPPING[lang] ||
    //     FONTFAMILY_NORMAL_MAPPING[LANG.US],
    letterSpacing: 0,
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '26px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '23px',
    },
  },
  // p2
  subtitle1: {
    // fontFamily:
    //     FONTFAMILY_NORMAL_MAPPING[lang] ||
    //     FONTFAMILY_NORMAL_MAPPING[LANG.US],
    letterSpacing: 0,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '23px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  // p3
  body2: {
    // fontFamily:
    //     FONTFAMILY_NORMAL_MAPPING[lang] ||
    //     FONTFAMILY_NORMAL_MAPPING[LANG.US],
    letterSpacing: 0,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
  // p4
  subtitle2: {
    // fontFamily:
    //     FONTFAMILY_NORMAL_MAPPING[lang] ||
    //     FONTFAMILY_NORMAL_MAPPING[LANG.US],
    letterSpacing: 0,
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
  },
  button: {
    // fontFamily:
    //     FONTFAMILY_HEADER_MAPPING[lang] ||
    //     FONTFAMILY_HEADER_MAPPING[LANG.US],
    letterSpacing: 0,
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '20px',
    textTransform: 'none',
  },
  subscribeTitle: {
    textAlign: 'center',
    lineHeight: '57px',
    fontSize: '42px',
    fontWeight: 800,
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '33px',
    },
  },
  subscribeSubTitle: {
    textAlign: 'center',
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: 800,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '18px',
    },
  },
};

export default theme;
