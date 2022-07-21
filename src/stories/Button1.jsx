import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { COLORS } from '../theme';
import styles from './button1Style';

const useStyles = makeStyles(styles);

export const BUTTON_THEME = {
  YELLOW: 'yellowButton',
  RED: 'redButton',
  WHITE: 'whiteButton',
};

export const BUTTON_TEXT_COLOR = {
  DARK: COLORS.dark,
  RED: COLORS.lightRed,
};

const StyledButton = ({ label, bgTheme, disabled, labelColor, ...props }) => {
  const classes = useStyles({ labelColor: labelColor });

  return (
    <Button
      variant="contained"
      disabled={disabled}
      classes={{
        root: `${classes.root} ${classes[bgTheme]}`,
        label: classes.label,
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

StyledButton.propTypes = {
  label: PropTypes.string.isRequired,
  bgTheme: PropTypes.oneOf([
    BUTTON_THEME.YELLOW,
    BUTTON_THEME.RED,
    BUTTON_THEME.WHITE,
  ]),
  disabled: PropTypes.bool,
  labelColor: PropTypes.string,
};

StyledButton.defaultProps = {
  bgTheme: null,
  disabled: false,
  labelColor: null,
};

export default StyledButton;
