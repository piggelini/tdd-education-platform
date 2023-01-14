import Header from './Components/UI/Header/Header';
import Footer from './Components/UI/Footer/Footer';
import './App.css';
import Home from './Components/Pages/Home/Home'
import Courses from './Components/Pages/Courses/CourseList';
import Teachers from './Components/Pages/Teachers/TeacherList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/courses'
            element={<Courses />}
          />
          <Route
            path='/teachers'
            element={<Teachers />}
          />

        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
