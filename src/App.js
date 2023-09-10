import styles from './App.module.css';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar /> 
    <div className={styles.Content}>
      <Routes>
        <Route exact="true" path="/" element= {
        <div>
          <Landing />
          <Intro />
        </div>   
      } />
        <Route exact="true" path="/registrosakashicos" element= {<Intro />} />
      </Routes>   
    </div> 
      <Footer />
    </>
  );
}

export default App;
