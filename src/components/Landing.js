import {React} from 'react';
import styles from '../styles/Landing.module.css'
import app from '../App.module.css'
import video from '../images/stars.mp4'
import image from '../images/starimage.png'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'


function Landing() {
    return (
        <>
            <div className={
                styles.Hero
            }>
                {/*<img src={tree}
                    alt='Tree'/>*/}
                    <img src={image} className={app.Mobile}/>
                    <video src={video} autoPlay loop muted className={app.Desktop}/>
                <div className={
                    app.Content
                }>
                    <h1>Paula Parral</h1>
                    <h2>Registros Akashicos</h2>
                </div>
                <NavLink to="/registrosakashicos">
                    <Button variant="dark" className={styles.Button}>Bienvenidos</Button>
                </NavLink>
            </div>
        </>
    );
}

export default Landing;
