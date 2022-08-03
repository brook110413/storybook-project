import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

import styles from './customRadioStyle';

const useStyles = makeStyles(styles);

const CustomRadio = ({ checked, ...props }) => {
  const classes = useStyles();

  return (
    <Radio
      color="primary"
      checked={checked}
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

CustomRadio.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default CustomRadio;
