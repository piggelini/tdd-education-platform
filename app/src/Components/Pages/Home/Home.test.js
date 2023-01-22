import { render, screen } from '@testing-library/react';
import Home from './Home';

describe("Home component", () => {

    test('Home heading', () => {
        render(<Home />);

        const home = screen.getByText(/course application/i);


        expect(home).toBeInTheDocument();

    });

})

