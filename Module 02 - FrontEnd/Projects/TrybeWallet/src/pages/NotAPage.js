import React from 'react';
import { Link } from 'react-router-dom';
import unplugIMG from '../assets/404-plug.gif';

const NotAPage = () => (
  <div className="NotAPage">
    <h1>404</h1>
    <h2>Página não encontrada</h2>
    <img src={ unplugIMG } alt="not a page" />
    <p>
      Sentimos muito por sua página não ter sido encontrada.
    </p>
    <p>
      Por favor, volte para a página inicial.
    </p>
    <Link to="/">
      <button type="button">Voltar</button>
    </Link>
  </div>
);

export default NotAPage;
