import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import fetchPlanets from '../api/fetchPlanets';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });

  useEffect(() => {
    const requestAPI = async () => {
      try {
        const results = await fetchPlanets();
        setData(results);
      } catch (error) {
        setFetchError(error);
      }
    };
    requestAPI();
  }, []);

  const setFilterByName = ({ target: { value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByName: {
        name: value,
      },
    }));
  };

  const setFilterByNum = ({ column, comparison, value }) => {
    setFilters((prevFilters) => {
      if (!prevFilters.filterByNumericValues[0].value) {
        return { ...prevFilters, filterByNumericValues: [{ column, comparison, value }] };
      }
      return { ...prevFilters,
        filterByNumericValues: [
          ...prevFilters.filterByNumericValues,
          { column, comparison, value },
        ],
      };
    });
  };

  const contextValue = {
    data,
    fetchError,
    filters,
    setFilterByName,
    setFilterByNum,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      { children }
    </GlobalContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
