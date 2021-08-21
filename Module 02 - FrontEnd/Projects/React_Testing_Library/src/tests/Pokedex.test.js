import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../services/helpers/renderWithRouter';

describe('Testando o componente Pokedex', () => {
  it('Testa se página contém um heading h2 com o texto Encountered pokémons', () => {
    // Access the screen elements.
    renderWithRouter(<App />);

    // Interact the elements if necessary.
    const textInPage = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });

    // Check if match.
    expect(textInPage).toBeInTheDocument();
  });

  it('Testa se é exibido o próximo Pokémon ao clicar no botão Próximo pokémon', () => {
    // Access the screen elements.
    const { getByText } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    const contentText = getByText(/Próximo pokémon/i);

    // Check if match.
    expect(contentText).toBeInTheDocument();
  });

  it('Testa se a Pokédex contém um botão para resetar o filtro.', () => {
    const { getByText } = renderWithRouter(<App />);
    fireEvent.click(getByText(/All/i));
  });

  it('Testa se a Pokédex tem os botões de filtro.', () => {
    // Access the screen elements.
    const { getAllByTestId, getAllByRole, getByRole } = renderWithRouter(<App />);

    // Interact the elements if necessary.
    const typesPokemon = 7;
    const button = getAllByTestId('pokemon-type-button');

    const electric = getAllByRole('button', {
      name: /electric/i,
    });

    const fire = getAllByRole('button', {
      name: /fire/i,
    });

    const bug = getAllByRole('button', {
      name: /bug/i,
    });

    const poison = getAllByRole('button', {
      name: /poison/i,
    });

    const psychic = getAllByRole('button', {
      name: /psychic/i,
    });

    const normal = getAllByRole('button', {
      name: /normal/i,
    });

    const dragon = getAllByRole('button', {
      name: /dragon/i,
    });

    const buttonAll = getByRole('button', {
      name: /all/i,
    });

    // Check if match.
    expect(button).toHaveLength(typesPokemon);
    expect(electric).toHaveLength(1);
    expect(fire).toHaveLength(1);
    expect(bug).toHaveLength(1);
    expect(poison).toHaveLength(1);
    expect(psychic).toHaveLength(1);
    expect(normal).toHaveLength(1);
    expect(dragon).toHaveLength(1);
    expect(buttonAll).toBeInTheDocument();
  });
});
