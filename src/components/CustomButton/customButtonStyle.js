const customButtonStyle = (theme) => ({
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
    '&:active': {
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
    WebkitTextFillColor: theme.palette.common.white,
    backgroundColor: theme.palette.common.lightRed,
    '&:hover': {
      backgroundColor: theme.palette.common.lightRed,
    },
  },
  whiteButton: (props) => ({
    color: props.labelColor || theme.palette.common.dark,
    WebkitTextFillColor: props.labelColor || theme.palette.common.dark,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  }),
  label: {
    wordBreak: 'break-word',
    ...theme.typography.button,
  },
});

export default customButtonStyle;
