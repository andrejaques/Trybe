import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTotal, expDel } from '../actions';

const table = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

const Table = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.wallet);
  function handleClick(id) {
    const valorCon = document.querySelector('#valorCon').innerText;
    console.log(valorCon);
    dispatch(expDel(id));
    dispatch(addTotal(-Number(valorCon)));
  }
  return (
    <table>
      <thead>
        <tr>
          {table.map((item, key) => <th key={ key }>{ item }</th>)}
        </tr>
        {expenses.length > 0 && expenses.map((expense, key) => (
          <tr key={ key }>
            <td className="carteira-table-cell">{expense.description}</td>
            <td className="carteira-table-cell">{expense.tag}</td>
            <td className="carteira-table-cell">{expense.method}</td>
            <td className="carteira-table-cell">{expense.value}</td>
            <td className="carteira-table-cell">
              {expense.exchangeRates[expense.currency].name}
            </td>
            <td className="carteira-table-cell">
              {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td className="carteira-table-cell" id="valorCon">
              { parseFloat(expense.exchangeRates[expense.currency].ask
                * expense.value).toFixed(2) }
            </td>
            <td className="carteira-table-cell">Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => handleClick(expense.id) }
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default Table;
