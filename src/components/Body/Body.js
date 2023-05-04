import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

import './Body.css';

const Body = () => (
  <div className="Body" data-testid="Body">
    <Input/>
  </div>
);

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
