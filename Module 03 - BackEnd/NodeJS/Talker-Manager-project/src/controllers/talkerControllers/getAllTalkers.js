const fs = require('fs').promises;

const TALKER_REFER = './talker.json';

const getAllTalkers = async (_req, res) => {
  try {
    const request = await fs.readFile(TALKER_REFER, 'utf-8');
    const talker = JSON.parse(request);
    return res.status(200).send(talker);
  } catch (_err) {
    res.status(200).json([]);
  }
};

module.exports = getAllTalkers;