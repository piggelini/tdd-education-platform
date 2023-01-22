import Header from './Components/UI/Header/Header';
import Footer from './Components/UI/Footer/Footer';
import './App.css';
import Home from './Components/Pages/Home/Home'
import CourseList from './Components/Pages/Courses/CourseList';
import TeacherList from './Components/Pages/Teachers/TeacherList';
import CourseDetails from './Components/Pages/Courses/CourseDetails';
import TeacherDetails from './Components/Pages/Teachers/TeacherDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import ModalContext from './Components/Context/modal-context'
import DataContext from './Components/Context/data-context';
import Modal from './Components/UI/Modal/Modal';


function App() {
  const modalContext = useContext(ModalContext);



  return (

    <Router>
      <div className='flex-app'>
        <Header />
        <main>
          {modalContext.showModal &&
            <Modal />}
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/courses'
              element={<CourseList />}
            />
            <Route
              path='/teachers'
              element={<TeacherList />}
            />
            <Route

              path="/courses/:id"
              element={<CourseDetails />}
            />
            <Route
              path="/teachers/:id"
              element={<TeacherDetails />}
            />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
