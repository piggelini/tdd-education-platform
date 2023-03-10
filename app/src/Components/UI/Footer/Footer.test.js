import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

describe("Footer component", () => {

    test('footer component', () => {
        render(<Footer />, { wrapper: MemoryRouter });


        const footer = screen.getByRole('footer');


        expect(footer).toBeInTheDocument();


    });

})

