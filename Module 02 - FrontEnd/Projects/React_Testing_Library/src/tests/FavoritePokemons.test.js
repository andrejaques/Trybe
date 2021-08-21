import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderWithRouter from '../services/helpers/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Testando o componente <FavoritePokemons.js />', () => {
  it('Teste se exibe No favorite se o user nao tiver pokemons favoritos', () => {
    // Access the screen elements.
    const { getByText } = render(<FavoritePokemons />);

    // Interact the elements if necessary.
    const msg = getByText(/No favorite pokemon found/i);

    // Check if match.
    expect(msg).toBeInTheDocument();
  });

  it('Verifica se exibe todos os cards de pokémons favoritados', () => {
    // Access the screen elements.
    const { getByText, getByRole, history } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    history.push('/pokemons/25');
    const favoritePikachu = getByRole('checkbox');
    expect(favoritePikachu).toBeInTheDocument();
    fireEvent.click(favoritePikachu);
    expect(favoritePikachu.checked).toEqual(true);

    history.push('/pokemons/4');
    const favoriteCharmander = getByRole('checkbox');
    expect(favoriteCharmander).toBeInTheDocument();
    fireEvent.click(favoriteCharmander);
    expect(favoriteCharmander.checked).toEqual(true);

    // Check if match.
    history.push('/favorites');
    const pikachu = getByText(/pikachu/i);
    const charmander = getByText(/charmander/i);
    expect(pikachu).toBeInTheDocument();
    expect(charmander).toBeInTheDocument();
  });

  it('Verifica se o card do pokémon não aparece if nao favoritado', () => {
    // Access the screen elements.
    const { queryByText } = render(<FavoritePokemons />);

    // Interact the elements if necessary.
    const pikachu = queryByText(/pikachu/i);

    // Check if match.
    expect(pikachu).not.toBeInTheDocument();
  });
});
