import { React, useState, useEffect } from 'react';
import styles from '../styles/Intro.module.css'




function Intro() {
    return (
        <>  
        <h3 className={styles.Subtitle}> Que son los Registros Akashicos? </h3>
        <div className={styles.Box}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </>
    );
}

export default Intro;

