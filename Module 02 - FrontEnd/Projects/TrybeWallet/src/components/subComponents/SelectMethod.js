import React from 'react';
import PropTypes from 'prop-types';

const SelectMethod = (props) => {
  const { onChange } = props;

  return (
    <label htmlFor="form-pay-method">
      Método de pagamento:
      <select id="form-pay-method" name="Pagamento" onChange={ onChange }>
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    </label>
  );
};

export default SelectMethod;

SelectMethod.propTypes = {
  onChange: PropTypes.func.isRequired,
};
