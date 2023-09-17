import {React} from 'react';
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <>

            <footer>
                <div>
                        <a className={
                                styles.Social
                            }
                            href="https://www.facebook.com/paula.parral.7"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a className={
                                styles.Social
                            }
                            href='https://www.instagram.com/paulaparral/'
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-brands fa-square-instagram"></i>
                        </a>
                        <a className={
                                styles.Social
                            }
                            href="mailto:paulaparral@hotmail.com">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        <a 
                        className={
                            styles.Social
                        }
                        href="https://wa.me/+59899142351"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i class="fa fa-whatsapp whatsapp-icon"></i>
                        </a>
                </div>
                <p className={styles.Footer}>Copywright © 2023 Registros Akashicos Paula Parral, all rights reserved.</p>
            </footer>
            
        </>
    );
}

export default Footer;
