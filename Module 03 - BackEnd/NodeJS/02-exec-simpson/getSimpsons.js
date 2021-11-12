const fs = require('fs/promises');

const getSimpsons = async (file) => {
  const result = await fs.readFile(file, 'utf-8');
  return JSON.parse(result);
};

const setSimpson = async (file, newSimp) => fs.writeFile(file, newSimp);

module.exports = { getSimpsons, setSimpson };
