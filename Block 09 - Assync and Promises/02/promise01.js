/* Da mesma forma que uma função tem o return para retornar uma resposta de sua execução, 
a Promise tem o resolve e o reject , que fazem exatamente isso: retornam uma resposta de sua execução. 
O resolve retorna uma resposta positiva, ou seja, você irá utilizá-lo quando quiser transmitir 
que tudo ocorreu bem. Já o reject retorna uma resposta negativa, ou seja, você irá utilizá-lo quando 
ocorrer algo errado.
*/

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

