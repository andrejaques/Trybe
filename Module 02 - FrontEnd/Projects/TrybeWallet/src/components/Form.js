import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Description from './subComponents/Description';
import InputValue from './subComponents/InputValue';
import SelectMethod from './subComponents/SelectMethod';
import SelectTag from './subComponents/SelectTag';
import { addRate, addTotal, fetchExpenses } from '../actions';

const Form = () => {
  const { currencies } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [id, setId] = useState(0);
  const [tag, setTag] = useState('Alimentação');
  function handleClick(e) {
    e.preventDefault();
    setId(id + 1);
    const total = 0;
    const currentRate = currencies[currency].ask;
    const totalCalc = total + parseFloat(currentRate * value).toFixed(2);
    dispatch(addTotal(totalCalc, id));
    dispatch(addRate(currentRate));
    const expensesObjt = {
      value,
      description,
      currency,
      method,
      id,
      tag,
      exchangeRates: currencies,
    };
    dispatch(fetchExpenses(expensesObjt));
  }
  return (
    <form className="Form">
      <InputValue onChange={ ({ target }) => setValue(target.value) } />
      <Description onChange={ ({ target }) => setDescription(target.value) } />
      <label htmlFor="form-currency">
        Moeda:
        <select
          id="form-currency"
          name="Moeda"
          onChange={ ({ target }) => setCurrency(target.value) }
        >
          {Object.keys(currencies).filter((curr) => curr !== 'USDT').map((curr) => (
            <option key={ curr }>{ curr }</option>
          ))}
        </select>
      </label>
      <SelectMethod onChange={ ({ target }) => setMethod(target.value) } />
      <SelectTag onChange={ ({ target }) => setTag(target.value) } />
      <button type="submit" onClick={ handleClick }>Adicionar despesa</button>
    </form>
  );
};

export default Form;
