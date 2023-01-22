import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe("Courselist", () => {


    test('Renders a courses heading', async () => {
        render(<CourseList />);


        const courses = screen.getByText(/courses/i);


        expect(courses).toBeInTheDocument();


    });

})

