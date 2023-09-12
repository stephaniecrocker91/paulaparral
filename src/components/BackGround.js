import {React} from 'react';
import styles from '../styles/Background.module.css'
import video from '../images/stars.mp4'
import image from '../images/starimage.png'



function Background() {
    return (
        <>
            <img src={image} className={styles.Mobile}/>
            <video src={video} autoPlay loop muted className={styles.Desktop}/>
        </>
    );
}

export default Background;
