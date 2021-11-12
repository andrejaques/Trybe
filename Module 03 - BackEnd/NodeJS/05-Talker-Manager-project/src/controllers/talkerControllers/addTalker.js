const fs = require('fs').promises;

const TALKER_REFER = './talker.json';
const SERVER_ERROR = 'Ocorreu um erro. Tente novamente mais tarde';

const addTalker = async (req, res) => {
  try { 
    const { name, age, talk } = req.body;
    const request = await fs.readFile(TALKER_REFER, 'utf-8');
    const talkers = JSON.parse(request);
    const newTalker = {
      name,
      age,
      id: talkers.length + 1,
      talk,
    };

    await fs.writeFile(TALKER_REFER, JSON.stringify([...talkers, newTalker]));
    return res.status(201).json(newTalker);
  } catch (_err) {
    res.status(500).json({ message: SERVER_ERROR });
  }
};

module.exports = addTalker;