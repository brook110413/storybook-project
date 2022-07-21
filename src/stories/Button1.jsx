import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './button1Style';

const useStyles = makeStyles(styles);

export const StyledButton = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.root} {...props}>
      {children}
    </Button>
  );
};

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
};
