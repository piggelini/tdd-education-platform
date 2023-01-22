import { render, screen } from '@testing-library/react';
import TeacherList from './TeacherList'

describe("Teacherslist", () => {


    test('Renders a teachers heading', async () => {
        render(<TeacherList />);


        const teachers = screen.getByText(/teachers/i);


        expect(teachers).toBeInTheDocument();


    });

})