import {React} from 'react';
import styles from '../styles/Landing.module.css'
import image from '../images/starimage.png'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import Video from './Video';
import Footer from './Footer';


function Landing() {
    return (
        <>
                <img src={image} className={styles.Mobile}/>
                <Video />
                <div className={
                    styles.LandingText
                }>
                    <h1>Paula Parral</h1>
                    <h2>Registros Akashicos</h2>
                </div>
                <NavLink to="/registrosakashicos">
                    <Button variant="dark" className={styles.Button}>Bienvenidos</Button>
                </NavLink>
        </>
    );
}

export default Landing;
