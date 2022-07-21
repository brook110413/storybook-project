const button1Style = (theme) => ({
  root: {
    borderRadius: '50px',
    textTransform: 'inherit',
    boxShadow: 'none',
    minWidth: '200px',
    maxWidth: '280px',
    height: '40px',
    padding: '0 15px',
    textFillColor: 'unset',
    color: theme.palette.common.dark,
    '&:hover': {
      boxShadow: 'none',
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.common.lightGray,
      color: theme.palette.common.white,
    },
  },
  yellowButton: {
    backgroundColor: theme.palette.common.yellow,
    '&:hover': {
      backgroundColor: theme.palette.common.yellow,
    },
  },
  redButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.lightRed,
    WebkitTextFillColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.lightRed,
    },
  },
  whiteButton: {
    color: (props) => props.labelColor,
    WebkitTextFillColor: (props) => props.labelColor,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  label: {
    ...theme.typography.button,
  },
});

export default button1Style;
