const fetchPlanets = async () => {
  const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetching = await fetch(PLANETS_URL);
  const { results } = await fetching.json();
  return results;
};

export default fetchPlanets;
