import React from 'react';
import PropTypes from 'prop-types';

const InputValue = (props) => {
  const { onChange } = props;

  return (
    <label htmlFor="form-value">
      Valor:
      <input type="text" name="Valor" id="form-value" onChange={ onChange } />
    </label>
  );
};

export default InputValue;

InputValue.propTypes = {
  onChange: PropTypes.func.isRequired,
};
