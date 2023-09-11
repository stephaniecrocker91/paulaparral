import {React, useState, useEffect} from 'react';
import styles from '../styles/Landing.module.css'
import video from '../images/stars.mp4'
import Button from 'react-bootstrap/Button';


function Landing() {
    return (
        <>
            <div className={
                styles.Hero
            }>
                <div className={
                    styles.overlay
                }></div>
                {/*<img src={tree}
                    alt='Tree'/>*/}
                    <video src={video} autoPlay loop muted />
                <div className={
                    styles.Content
                }>
                    <h1>Paula Parral</h1>
                    <h2>Registros Akashicos</h2>
                </div>
                <Button variant="dark" className={styles.Button}>Bienvenidos</Button>
            </div>
        </>
    );
}

export default Landing;
