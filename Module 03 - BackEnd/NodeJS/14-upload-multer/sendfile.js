const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const URL = 'http://localhost:3000/files/upload';

async function main() {
  const readStream = fs.createReadStream('./files/projetos2.jpeg');
  
  const form = new FormData();
  form.append('file', readStream);
  
  await axios.post(URL, form, { headers: { ...form.getHeaders() } });

  readStream.close();
}

main();