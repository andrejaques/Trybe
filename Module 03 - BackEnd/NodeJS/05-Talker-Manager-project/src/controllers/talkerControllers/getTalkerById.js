const fs = require('fs').promises;

const TALKER_REFER = './talker.json';
const ERROR_TALKER_NOT_FOUND = 'Pessoa palestrante não encontrada';
const ERROR_SERVER = 'Ocorreu um erro. Tente novamente mais tarde';

const getTalkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await fs.readFile(TALKER_REFER, 'utf-8');
    const talker = JSON.parse(request);
    const findTalker = talker.find((e) => e.id === Number(id));

    if (!findTalker) return res.status(404).json({ message: ERROR_TALKER_NOT_FOUND });

    res.status(200).json(findTalker);
  } catch (_err) {
    res.status(500).json({ message: ERROR_SERVER });
  }
};

module.exports = getTalkerById;