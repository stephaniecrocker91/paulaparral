import styles from './App.module.css';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
    <NavBar /> 
      <Routes>
        <Route exact="true" path="/" element= {
        <div>
          <Landing />
          <Intro />
        </div>   
      } />
        <Route exact="true" path="/registrosakashicos" element= {<Intro />} />
      </Routes>    
      <Footer />
    </>
  );
}

export default App;
