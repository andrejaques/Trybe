import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('Testando o componente <About.js />', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    // Access the screen elements.
    const { getByText } = render(<About />);

    // Interact the elements if necessary.
    const Poke = getByText(/About Pokédex/i);

    // Check if match.
    expect(Poke).toHaveTextContent('About Pokédex');
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    // Access the screen elements.
    const { getByText } = render(<About />);

    // Interact the elements if necessary.
    const aboutPoke = getByText(/About Pokédex/i);

    // Check if match.
    expect(aboutPoke).toHaveTextContent('About Pokédex');
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    // Access the screen elements.
    const { getByText } = render(<About />);

    // Interact the elements if necessary.
    const tagOne = getByText(/This application simulates a Pokédex/i);
    const tagTwo = getByText(/One can filter Pokémons by type/i);

    // Check if match
    expect(tagOne).toHaveTextContent(/This application simulates a Pokédex/);
    expect(tagTwo).toHaveTextContent(/One can filter Pokémons by type/);
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex.', () => {
    // Access the screen elements.
    const { getByRole } = render(<About />);

    // Interact the elements if necessary.
    const pokedexImg = getByRole('img');
    const thumb = 'thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    // Check if match.
    expect(pokedexImg.src).toBe(`https://cdn2.bulbagarden.net/upload/${thumb}`);
  });
});
