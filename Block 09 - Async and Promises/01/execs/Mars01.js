// Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

/*
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
*/

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

function sendMarsTemperature() {
  const temp = getMarsTemperature();
  setTimeout(() => {
    console.log(`Mars temperature is: ${temp} degree Celsius`);
  }, messageDelay()); 
}


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

