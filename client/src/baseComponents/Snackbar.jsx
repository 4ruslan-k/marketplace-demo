/* eslint-disable no-underscore-dangle */
import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { bool, func, string } from 'prop-types';

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function StyledSnackbarComponent({ isSnackbarOpen, handleCloseSnackbar, message }) {
  return (
    <Snackbar open={isSnackbarOpen} autoHideDuration={2000} onClose={handleCloseSnackbar}>
      <Alert onClose={handleCloseSnackbar} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
}
StyledSnackbarComponent.propTypes = {
  isSnackbarOpen: bool.isRequired,
  handleCloseSnackbar: func.isRequired,
  message: string.isRequired,
};
