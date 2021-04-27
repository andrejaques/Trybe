// -------------------- Imports -----------------------

const { animals, employees, prices, hours } = require('./data');

// -------------------- require 01 -----------------------

function animalsByIds(...ids) {
  return animals.filter(({ id }) => ids.includes(id)); // this includes was based in Murilo Goncalves
}
/* return ids.map((id) => animals.find((animal) => animal.id === id)); */

// -------------------- require 02 -----------------------

function animalsOlderThan(animal, animalsAge) {
  return animals
    .find(({ name }) => name === animal)
    .residents.every(({ age }) => age >= animalsAge);
}

// -------------------- require 03 -----------------------

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find(({ firstName, lastName }) => [firstName, lastName].includes(employeeName));
}

// -------------------- require 04 -----------------------

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// -------------------- require 05 -----------------------

function isManager(id) {
  return employees.some(({ managers }) => managers.find((manager) => manager === id));
}

// -------------------- require 06 ------------------------

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// -------------------- require 07 ------------------------

function animalCount(species) {
  const howMannyAnimals = animals.reduce((acc, crr) => { // function inspired by Lucas Pedroso
    acc[crr.name] = crr.residents.length;
    return acc;
  }, {});

  return !species ? howMannyAnimals : howMannyAnimals[species];
}

// --------------------- require 08 ------------------------

// entrie: { 'Adult': 2, 'Child': 3, 'Senior': 1 }

// using Object.entries to transform the object in array:
function entryCalculator(entrants = 0) {
  const priceCalc = (acc, [category, qnt]) => acc + prices[category] * qnt;
  return Object.entries(entrants).reduce(priceCalc, 0);
}

// the way to do this function w/o transform objects in arrays (using the prototyped Object functions) is:
/* function entryCalculator(entrants = 0) {
  const { Adult: adultQnt, Child: childQnt, Senior: seniorQnt } = entrants;
  const validCalc = (a, b) => (!a) ? 0 : a * b;
  return (validCalc(adultQnt, prices.Adult)) + (validCalc(childQnt, prices.Child)) + (validCalc(seniorQnt, prices.Senior));
} */

// -------- require 09 ---------- Functional but enemy of the Lint ----------- require 09 ------

/* const animalsByLocation = (...zone) => animals.filter(({ location }) => zone.includes(location));

const animalsNE = animalsByLocation('NE');
const animalsNW = animalsByLocation('NW');
const animalsSE = animalsByLocation('SE');
const animalsSW = animalsByLocation('SW');

const speciesByZone = (zone) => zone.reduce((acc, crr) => [...acc, crr.name], []);

const noOptions = {
  NE: speciesByZone(animalsNE),
  NW: speciesByZone(animalsNW),
  SE: speciesByZone(animalsSE),
  SW: speciesByZone(animalsSW),
};

const specieReduced = (specie, sorted = false) => {
  if (!sorted) {
    return specie.reduce((acc, crr) => {
      return [...acc, { [crr.name]: crr.residents.map(a => a.name) }];
    }, []);
  }

  return specie.reduce((acc, crr) => {
    return [...acc, { [crr.name]: crr.residents.map(a => a.name).sort() }];
  }, []);
};

const residentsControl = (specie, sexOption = false, sorted = false) => {
  if (!sorted) {
    return specie.reduce((acc, crr) => {
      return [...acc, { [crr.name]: (crr.residents.filter((animal) => animal.sex === sexOption).map(a => a.name)) }];
    }, []);
  }

  return specie.reduce((acc, crr) => {
    return [...acc, { [crr.name]: (crr.residents.filter((animal) => animal.sex === sexOption).map(a => a.name)).sort() }];
  }, []);
};

const specieResidents = (specie, sorted = false, sex = false) => {
  return !!sorted && sex === 'male' ? residentsControl(specie, 'male', true)
    : !!sorted && sex === 'female' ? residentsControl(specie, 'female', true)
    : !sorted && sex === 'male' ? residentsControl(specie, 'male')
    : !sorted && sex === 'female' ? residentsControl(specie, 'female')
    : !!sorted && !sex ? specieReduced(specie, true)
    : specieReduced(specie);
};

const optionsControl = (option1, option2) => ({
  NE: specieResidents(animalsNE, option1, option2),
  NW: specieResidents(animalsNW, option1, option2),
  SE: specieResidents(animalsSE, option1, option2),
  SW: specieResidents(animalsSW, option1, option2),
});

const includeNamesC = optionsControl();
const sortedNamesC = optionsControl(true);
const sortedFemaleNamesC = optionsControl(true, 'female');
const sortedMaleNamesC = optionsControl(true, 'male');
const maleNamesC = optionsControl(false, 'male');
const femaleNamesC = optionsControl(false, 'female');

function animalMap(options = {}) {
  return !options.includeNames ? noOptions
    : !!options.sorted && options.sex === 'female' ? sortedFemaleNamesC
    : !!options.sorted && options.sex === 'male' ? sortedMaleNamesC
    : !!options.sorted && !options.sex ? sortedNamesC
    : options.sex === 'male' ? maleNamesC
    : options.sex === 'female' ? femaleNamesC
    : includeNamesC;
} */

// --------------------- require 10 ------------------------

const agendaControl = () => (acc, [crrDay, crrValues]) => (
  ({ ...acc,
    [crrDay]: (crrValues.close - crrValues.open !== 0)
      ? `Open from ${crrValues.open}am until ${crrValues.close - 12}pm`
      : 'CLOSED' })
);

function schedule(dayName) { // um salve pra Anderson Silva que saiu do UFC pra me ajudar nessa função
  const agenda = Object.entries(hours);

  if (!dayName) return agenda.reduce(agendaControl(), {});
  return agenda.filter((day) => day[0] === dayName).reduce(agendaControl(), {});
}

// --------------------- require 11 ------------------------

function oldestFromFirstSpecies(idEmp) {
  const { responsibleFor: speciesOld } = employees.find(({ id }) => idEmp.includes(id));
  const [referSpecie] = animals.filter(({ id }) => speciesOld[0].includes(id));
  const oldestAnimal = referSpecie.residents.reduce((acc, crr) => (acc.age > crr.age ? acc : crr));
  return Object.values(oldestAnimal);
}

// --------------------- require 12 ------------------------

function increasePrices(percentage) {
  const { Adult, Child, Senior } = prices;
  prices.Adult = Math.ceil(Adult * (percentage + 100)) / 100;
  prices.Child = Math.ceil(Child * (percentage + 100)) / 100;
  prices.Senior = Math.ceil(Senior * (percentage + 100)) / 100;
}

// --------------------- require 13 ------------------------

const empAnimalsControl = (emp) => emp.reduce((acc, crr) => {
  const { firstName, lastName, responsibleFor } = crr;
  const referSpecie = responsibleFor.map((id) => animals.find((animal) => animal.id === id));
  // const referSpecie = animals.filter(({ id }) => responsibleFor.includes(id)) - mais funcional.
  const animalsName = referSpecie.map((a) => a.name);
  return { ...acc,
    [`${firstName} ${lastName}`]: animalsName };
}, {});

function employeeCoverage(idOrName) {
  const empOne = employees.filter(({ id, firstName, lastName }) =>
    [id, firstName, lastName].includes(idOrName));

  if (!idOrName) return empAnimalsControl(employees);
  return empAnimalsControl(empOne);
}

module.exports = {
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
  animalCount,
  entryCalculator,
  increasePrices,
  schedule,
  oldestFromFirstSpecies,
  employeeCoverage,
  // animalMap,
};
