const fs = require('fs').promises;

const TALKER_REFER = './talker.json';
const ERROR_TALKER_NOT_FOUND = 'Pessoa palestrante não encontrada';
const SERVER_ERROR = 'Ocorreu um erro. Tente novamente mais tarde';

const editTalker = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const request = await fs.readFile(TALKER_REFER, 'utf-8');
    const talkers = JSON.parse(request);
    if (talkers.find((e) => e.id === Number(id))) {
      const talker = talkers.find((e) => e.id === Number(id));
      const newTalker = { id: talker.id, name, age, talk };
      const newTalkers = talkers.map((e) => (e.id === Number(id) ? newTalker : talker));
      await fs.writeFile(TALKER_REFER, JSON.stringify(newTalkers));
      return res.status(200).json(newTalker);
    }
    return res.status(404).json({ message: ERROR_TALKER_NOT_FOUND });
  } catch (err) {
    res.status(500).json({ message: SERVER_ERROR });
  }
};

module.exports = editTalker;