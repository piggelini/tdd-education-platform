import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header component", () => {

    test('header components heading', () => {
        render(<Header />);


        const headerText = screen.getByText(/Westcoast Education/);


        expect(headerText).toBeInTheDocument();
    });

})

