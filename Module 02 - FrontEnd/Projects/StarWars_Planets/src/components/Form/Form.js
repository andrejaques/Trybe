import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function FiltersContainer() {
  const {
    setFilterByName,
    setFilterByNum,
    filters: { filterByNumericValues },
  } = useGlobalContext();

  const [numFilters, setNumFilters] = useState({
    column: columns[0],
    comparison: 'maior que',
    value: '1000',
  });

  useEffect(() => {
    const [newColumn] = columns.filter((column) => !filterByNumericValues
      .some((numFilter) => numFilter.column === column))
      .map((column) => column);
    setNumFilters((prevNumState) => ({
      ...prevNumState,
      column: newColumn,
    }));
  }, [filterByNumericValues]);

  const handleChange = ({ target: { name, value } }) => {
    setNumFilters((prevNumFilters) => ({
      ...prevNumFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Planet Name"
        onChange={ setFilterByName }
      />
      <select
        data-testid="column-filter"
        name="column"
        value={ numFilters.column }
        onChange={ handleChange }
      >
        { columns.filter((column) => !filterByNumericValues
          .some((numericFilter) => numericFilter.column === column))
          .map((column) => <option key={ column } value={ column }>{ column }</option>) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ numFilters.comparison }
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ numFilters.value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterByNum(numFilters) }
      >
        Adicionar filtro
      </button>
    </div>
  );
}
