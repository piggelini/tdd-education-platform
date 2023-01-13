import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom';

describe("Navigation component", () => {

    test('Nav should have ', () => {
        render(<Nav />, { wrapper: MemoryRouter });



    });

})
