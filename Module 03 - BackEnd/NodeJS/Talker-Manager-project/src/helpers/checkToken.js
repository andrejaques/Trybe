const checkToken = (token) => {
  const regex = /^(\d|\w){16}$/gm;

  return regex.test(token);
};

module.exports = checkToken;
