import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { newEmail } from '../actions';

const six = 6;

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { history } = props;
  function validateEmail(eMail) {
    const re = /\S+@\S+\.\S+/;
    return re.test(eMail);
  }
  const isEligible = () => {
    const isPswEligible = password.length >= six;
    const isEmailEligible = validateEmail(email);
    if (isEmailEligible && isPswEligible) return true;
    return false;
  };
  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(newEmail(email));
    return history.push('/carteira');
  };
  return (
    <div className="login">
      <form className="login__form">
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          data-testid="email-input"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          data-testid="password-input"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          type="submit"
          disabled={ !isEligible() }
          className="login__button"
          onClick={ (e) => submitLogin(e) }
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;

Login.propTypes = {
  history: PropTypes.func.isRequired,
};
