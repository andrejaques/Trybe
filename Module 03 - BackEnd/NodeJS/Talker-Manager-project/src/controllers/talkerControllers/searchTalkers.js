const fs = require('fs').promises;

const TALKER_REFER = './talker.json';
const SERVER_ERROR = 'Ocorreu um erro. Tente novamente mais tarde';

const searchTalkers = async (req, res) => {
  try {
    const { q } = req.query;
    const request = await fs.readFile(TALKER_REFER, 'utf-8');
    const talkers = JSON.parse(request);
    const qList = talkers.filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()));
    res.status(200).json(qList);
  } catch (err) {
    return res.status(500).json({ message: SERVER_ERROR });
  }
};

module.exports = searchTalkers;