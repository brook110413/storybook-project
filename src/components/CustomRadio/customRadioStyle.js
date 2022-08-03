const customRadioStyle = (theme) => ({
  icon: {
    borderRadius: '50%',
    width: '15px',
    height: '15px',
    boxShadow: `inset 0 0 0 1px ${theme.palette.common.gray}, inset 0 -1px 0 ${theme.palette.common.gray}`,
    backgroundColor: theme.palette.common.white,
    'input:hover ~ &': {
      backgroundColor: theme.palette.common.white,
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:after': {
      content: '""',
      width: '7px',
      height: '7px',
      backgroundColor: theme.palette.common.blue,
      borderRadius: '50%',
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.common.white,
    },
  },
});

export default customRadioStyle;
