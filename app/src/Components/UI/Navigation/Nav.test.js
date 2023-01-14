import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom';

describe("Navigation component", () => {

    test('render application link', () => {
        render(<Nav />, { wrapper: MemoryRouter });

        const application = screen.getByText(/Application/)

        expect(application).toBeInTheDocument();

    })

})
