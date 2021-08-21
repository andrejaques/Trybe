import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Testando o componente Not Found', () => {
  it('Verifica se contém um "h2" com o texto <b>Page requested not found 😭<b>', () => {
    // Access the screen elements.
    const { getByRole } = render(<NotFound />);

    // Interact the elements if necessary.
    const heading = getByRole('heading', { level: 2 });
    const titleText = 'Page requested not found';

    // Check if match.
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(titleText);
  });

  it('Verifica se a página mostra imagem de url', () => {
    // Access the screen elements.
    const { getByAltText } = render(<NotFound />);

    // Interact the elements if necessary.
    const img = getByAltText(/pikachu crying/i);
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    // Check if match.
    expect(img.src).toMatch(url);
  });
});
