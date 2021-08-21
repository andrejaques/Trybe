import React from 'react';
import PropTypes from 'prop-types';

const SelectTag = (props) => {
  const { onChange } = props;

  return (
    <label htmlFor="form-category">
      Tag:
      <select id="form-category" name="Categoria" onChange={ onChange }>
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </label>
  );
};

export default SelectTag;

SelectTag.propTypes = {
  onChange: PropTypes.func.isRequired,
};
