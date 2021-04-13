// adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.

/*
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...


sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
*/

// resposta:
const messageDelay = () => {
  const delay = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log(`The messageDelay was ${delay}ms`);    
  }, delay + 1000);
  return delay;
};

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);


function sendMarsTemperature(positiveFB, error) {
  const temp = getMarsTemperature();
  const chanceOfSucess = Math.floor(Math.random() * 100);

  setTimeout(() => {
    if (chanceOfSucess >= 40) {
      if (!positiveFB) console.log(`Mars temperature is: ${temp} degree Celsius`);
      else positiveFB(temp);
    }
    else {
      error('Robot is busy');
    }
  }, messageDelay()); 
}


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);

sendMarsTemperature();
