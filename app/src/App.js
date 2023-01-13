import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';
import Home from './Components/Home/Home'
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

        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
