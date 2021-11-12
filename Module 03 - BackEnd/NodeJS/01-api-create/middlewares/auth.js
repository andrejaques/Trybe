const users = [
  {
    username: 'pedrohrc',
    password: 'bananas'
  },
  {
    username: 'jade',
    password: 'lucas&leo'
  },
  {
    username: 'ricci',
    password: 'tuntztuntz'
  }
]

const NO_USERNAME_OR_PASSWORD = { 
  message: 'must inform username and password',
  status: 401 
};

const USER_NOT_FOUND = { 
  message: 'user not found.',
  status: 401 
};

const WRONG_PASSWORD = { 
  message: 'wrong password',
  status: 401 
};

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.headers;
    if (!username || !password) {
      return next(NO_USERNAME_OR_PASSWORD);
    }
  
    const found = users.find(val => val.username === username);
    if (!found) {
      return next(USER_NOT_FOUND);
    }
    if (found.password !== password) {
      return next(WRONG_PASSWORD);
    }
  
    req.user = found.username;
    next();
  } catch (err) {
    next(err);
  }
};
