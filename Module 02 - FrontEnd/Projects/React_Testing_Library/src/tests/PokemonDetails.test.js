import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../services/helpers/renderWithRouter';
import App from '../App';

describe('Test pokemonDetails component', () => {
  it('Teste se infos do Pokémon selecionado são mostradas na tela.', () => {
    // Access the screen elements.
    const { getByText } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    const getLinkUrl = getByText(/More details/);
    fireEvent.click(getLinkUrl);

    const checkText = getByText('Pikachu Details');
    const checkHead = getByText('Summary');
    const detailPokemon = getByText(/This intelligent Pokémon roasts hard berries/i);

    // Check if match
    expect(checkText).toBeInTheDocument();
    expect(getLinkUrl).not.toBeInTheDocument();
    expect(checkHead).toBeInTheDocument();
    expect(detailPokemon).toBeInTheDocument();
  });

  it('Teste se existe uma seção com os mapas de localizacao do pokémon', () => {
    // Access the screen elements.
    const { getByText, getAllByAltText } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    const getLinkUrl = getByText(/More details/);
    fireEvent.click(getLinkUrl);

    const checkH2 = getByText('Game Locations of Pikachu');
    const locations = getAllByAltText('Pikachu location');

    // Check if match
    expect(checkH2).toBeInTheDocument();
    expect(locations[0]).toBeInTheDocument();
    expect(locations[1]).toBeInTheDocument();
    expect(locations[0].src).toBeTruthy();
    expect(locations[1].src).toBeTruthy();
  });

  it('Teste se user pode favoritar um pokémon pela página de detalhes.', () => {
    // Access the screen elements.
    const { getByText, getByAltText, getByLabelText } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    const getLinkUrl = getByText(/More details/);
    fireEvent.click(getLinkUrl);

    const favBtn = getByLabelText(/Pokémon favoritado?/);
    fireEvent.click(favBtn);

    const altFav = getByAltText(/is marked as favorite/i);
    expect(altFav).toBeInTheDocument(); // [CHECK] exception of test architecture.

    fireEvent.click(favBtn);

    // Check if match
    expect(altFav).not.toBeInTheDocument();
  });
});
