import { React} from 'react';
import app from '../App.module.css'
import styles from '../styles/Intro.module.css'


function Intro() {
    return (
        <>
        <div className={app.Box}>
        <h3> Que son los Registros Akashicos? </h3> 
        <p className={styles.IntroText}>Los Registros Akáshicos son una memoria universal de todo lo que existe, y representan un espacio multidimensional dónde se archivan todas las experiencias del alma, incluyendo todos los conocimientos y las experiencias de las vidas pasadas, la vida presente y las potencialidades futuras. Cuando accedemos a este espacio podemos dar con el libro que contiene toda la historia e información de lo que ha sido hasta ahora tu recorrido álmico y lo que podría llegar a ser.</p>
        <p>Accediendo a este registro es que podes obtener revelaciones importantes para tu evolución, autoconocimiento y desarrollo personal. También, puede ayudarte y orientarte en la toma de decisiones, así como entender el aprendizaje y para qué de algunas situaciones, relaciones y cuestiones importantes de esta vida. Es una gran herramienta para alinearte con tu propósito y misión de vida.</p>
        </div>
        </>
    );
}

export default Intro;

