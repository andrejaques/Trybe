import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/helpers/renderWithRouter';

describe('Testando o componente <App.js />', () => {
  it('Teste se home é renderizada ao carregar a aplicação em: /', () => {
    // Access the screen elements.
    const { getByText, history } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    history.push('/');
    const encounteredPokemons = getByText(/Encountered pokémons/i);

    // Check if match
    expect(encounteredPokemons).toBeInTheDocument();
  });

  it('Teste se o topo da aplicação contém um conjunto fixo de links.', () => {
    // Access the screen elements.
    const { getAllByRole } = renderWithRouter(<App />);
    const links = getAllByRole(/link/i);

    // Interact the elements if necessary.
    const firstLink = links[0];
    const secondLink = links[1];
    const thirdLink = links[2];

    // Check if match
    expect(firstLink).toHaveTextContent(/Home/i);
    expect(secondLink).toHaveTextContent(/About/i);
    expect(thirdLink).toHaveTextContent(/Favorite Pokémons/i);
  });

  it('Teste se app vai para / ao clicar no link Home.', () => {
    // Access the screen elements.
    const { getByText, history } = renderWithRouter(<App />);
    const Home = getByText(/Home/i);

    // Interact the elements if necessary.
    userEvent.click(Home);
    const { pathname } = history.location;

    // Check if match
    expect(pathname).toBe('/');
  });

  it('Teste se app vai para /about ao clicar no link About.', () => {
    // Access the screen elements.
    const { getByText, history } = renderWithRouter(<App />);
    const About = getByText(/About/i);

    // Interact the elements if necessary.
    userEvent.click(About);
    const { pathname } = history.location;

    // Check if match
    expect(pathname).toBe('/about');
  });

  it('Teste se app vai para /favorites ao clicar no link Favorite.', () => {
    // Access the screen elements.
    const { getByText, history } = renderWithRouter(<App />);
    const Favorites = getByText(/Favorite Pokémons/i);

    // Interact the elements if necessary.
    userEvent.click(Favorites);
    const { pathname } = history.location;

    // Check if match
    expect(pathname).toBe('/favorites');
  });

  it('Teste se app vai para Not Found ao acessar uma página que nao existe.', () => {
    // Access the screen elements.
    const { getByText, history } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    history.push('/digimon/xablaumon');
    const notFound = getByText(/not found/i);

    // Check if match
    expect(notFound).toBeInTheDocument();
  });
});
