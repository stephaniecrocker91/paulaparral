import {React, useState, useEffect} from 'react';
import styles from '../styles/Landing.module.css'
import tree from '../images/tree.png'


function Landing() {
    return (
        <>
            <div className={
                styles.Hero
            }>
                <div className={
                    styles.overlay
                }></div>
                <img src={tree}
                    alt='Tree'/>
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
