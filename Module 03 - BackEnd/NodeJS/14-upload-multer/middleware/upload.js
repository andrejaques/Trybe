const multer = require('multer');

const validFile = (file) => {
  return true;
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads/') },
  filename: (req, file, callback) => { callback(null, file.originalname) },
})

module.exports = multer({ storage });