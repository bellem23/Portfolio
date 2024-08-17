import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/Portfolio/" element={<Home/>}/>
            <Route path="/Portfolio/about" element={<About/>}/>
            <Route path="/Portfolio/projects" element={<Projects/>}/>
            <Route path="/Portfolio/contact" element={<Contact/>}/>
          </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
