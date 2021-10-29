const fs = require('fs').promises;

const TALKER_REFER = './talker.json';
const SUCCESS_DELETE_TALKER = 'Pessoa palestrante deletada com sucesso';
const SERVER_ERROR = 'Ocorreu um erro. Tente novamente mais tarde';
const ERROR_TALKER_NOT_FOUND = 'Pessoa palestrante não encontrada';

const deleteTalker = async (req, res) => {
  try {
    const { id } = req.params;
  
    const request = await fs.readFile(TALKER_REFER, 'utf-8');
    const talkers = JSON.parse(request);
    if (talkers.find((talker) => talker.id === Number(id))) {
      const filteredTalkers = talkers.filter((talk) => talk.id !== Number(id));
      await fs.writeFile(TALKER_REFER, JSON.stringify(filteredTalkers));
      return res.status(200).json({ message: SUCCESS_DELETE_TALKER });
    }
    return res.status(404).json({ message: ERROR_TALKER_NOT_FOUND });
  } catch (error) {
    return res.status(500).json({ message: SERVER_ERROR });
  }
};

module.exports = deleteTalker;