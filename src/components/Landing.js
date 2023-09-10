import {React, useState, useEffect} from 'react';
import styles from '../styles/Landing.module.css'
import hero from '../images/agua.png'


function Landing() {
    return (
        <>
            <div className={
                styles.Hero
            }>
                <div className={
                    styles.overlay
                }></div>
                <img src={hero}
                    alt='Flor de loto'/>
                <div className={
                    styles.Content
                }>
                    <h1>Paula Parral</h1>
                    <h2>Registros Akashicos</h2>

                </div>
            </div>
        </>
    );
}

export default Landing;
