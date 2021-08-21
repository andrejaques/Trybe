import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
  const { onChange } = props;

  return (
    <label htmlFor="form-description">
      Descrição:
      <input type="text" name="Descrição" id="form-description" onChange={ onChange } />
    </label>
  );
};

export default Description;

Description.propTypes = {
  onChange: PropTypes.func.isRequired,
};
