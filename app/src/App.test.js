import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing Routing', () => {
    const setup = () => render(<App />);

    test.each`
    path          | componentTestId
    ${'/'}        | ${'home-component'}
    ${'/courses'}   | ${'courses-component'}
    ${'/teachers'} | ${'teacher-list-component'}
`(
        'display $componentTestId when path is $path',
        ({ path, componentTestId }) => {
            // Arrange
            window.history.pushState({}, '', path);
            setup();
            const elem = screen.queryByTestId(componentTestId);

            // Assert
            expect(elem).toBeInTheDocument();
        },
    );

    test.each`
    path          | componentTestId
    ${'/'}        | ${'courses-component'}
    ${'/courses'}  | ${'teacher-list-component'}
    ${'/teachers'} | ${'home-component'}
  `(
        'does not display $componentTestId when path is $path',
        ({ path, componentTestId }) => {
            // Arrange
            window.history.pushState({}, '', path);
            setup();
            const elem = screen.queryByTestId(componentTestId);

            // Assert
            expect(elem).not.toBeInTheDocument();
        },
    );

});

