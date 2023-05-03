import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/joy/Stack';
import PropTypes from 'prop-types';
import './Input.css';

const Input = () => (
  <div className="Input" data-testid="Input">

    <Stack spacing={2}>
      <Button variant="outlined">Outlined</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Stack>

  </div>
);

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
