import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

export default function Table() {
  const { data, filters: { filterByName, filterByNumericValues } } = useGlobalContext();
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    if (!filterByName.name) {
      setPlanets(data);
    } else {
      setPlanets(data.filter(({ name }) => name.includes(filterByName.name)));
    }
  }, [filterByName, data]);

  const numericFiltering = (array, column, comparison, value) => (
    array.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      return Number(planet[column]) === Number(value);
    }));

  useEffect(() => {
    filterByNumericValues.forEach(({ column, comparison, value }) => (
      value && setPlanets((prevsPlanets) => {
        if (prevsPlanets.length < 1) {
          if (!filterByName.name) {
            return numericFiltering(data, column, comparison, value);
          }
          const filteringByName = data
            .filter(({ name }) => name.includes(filterByName.name));
          return numericFiltering(filteringByName, column, comparison, value);
        }
        return numericFiltering(prevsPlanets, column, comparison, value);
      })
    ));
  }, [data, filterByName, filterByNumericValues]);

  return (
    <table className="table">
      <thead className="thead">
        <tr>
          { data.length > 0
          && Object.keys(data[0])
            .map((key, index1) => (
              key !== 'residents' && <th key={ index1 }>{ key }</th>)) }
        </tr>
      </thead>
      <tbody className="tbody">
        { planets.length > 0 && planets.map((planet, index2) => (
          <tr key={ index2 }>
            { Object.keys(planet).map((key, index3) => (
              key !== 'residents' && <td key={ index3 }>{ planet[key] }</td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}
