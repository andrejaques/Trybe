import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../services/helpers/renderWithRouter';
import App from '../App';

describe('Teste dos componentes do <Pokemon.js/>', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    // Access the screen elements.
    const { getByRole, getByText, getByTestId } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    const button = getByRole('button', { name: /Fire/i });
    fireEvent.click(button);

    const pokemon = getByText('Charmander');
    const info = getByText('Average weight: 8.5 kg');
    const image = getByRole('img');
    const type = getByTestId('pokemon-type');

    // Check if match
    expect(pokemon).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
    expect(image.alt).toContain('Charmander sprite');
    expect(type.innerHTML).toBe('Fire');
  });

  it('Teste de o Pokemon contém um Link de navegação', () => {
    // Access the screen elements.
    const { getByRole, history } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    const button = getByRole('button', { name: /Fire/i });
    fireEvent.click(button);

    const link = getByRole('link', { name: /More details/i });
    expect(link).toBeInTheDocument(); // [CHECK] exception of test architecture.

    fireEvent.click(link);
    const URL = '/pokemons/4';

    // Check if match
    expect(history.location.pathname).toBe(URL);
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    // Access the screen elements.
    const { getByRole, getAllByRole } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    const button = getByRole('button', { name: /Fire/i });
    fireEvent.click(button);

    const link = getByRole('link', { name: /More details/i });
    fireEvent.click(link);

    const favorites = getByRole('checkbox');
    fireEvent.click(favorites);

    const image = getAllByRole('img');

    // Check if match
    expect(image[1].src).toContain('star-icon.svg');
    expect(image[1].alt).toContain('Charmander is marked as favorite');
  });
});
