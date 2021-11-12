const validateRegister = (username, email, password) => {
  switch(true) {
    case !username: return { code: 400, message: 'Username is required' };
    case !email: return { code: 400, message: 'Email is required' };
    case !password: return { code: 400, message: 'Password is required' };
    case !/^[a-zA-Z0-9]+$/.test(username): return { code: 400, message: 'Username must be alphanumeric' };
    case username.length < 3: return { code: 400, message: 'Username must be at least 3 characters' };
    case !password.length >= 8: return { code: 400, message: 'Password must be at least 8 characters' };
    default: return { code: 200, message: 'User created' };
  }
}

const validateLogin = (username, password) => {
  switch(true) {
    case !username: return { code: 400, message: 'Username is required' };
    case !password: return { code: 400, message: 'Password is required' };
    case username.length < 3: return { code: 400, message: 'Username must be at least 3 characters' };
    case password.length < 8: return { code: 400, message: 'Password must be at least 8 characters' };
    default: return { code: 200, message: 'User logged in' };
  }
};

module.exports = {
  validateRegister,
  validateLogin,
}
