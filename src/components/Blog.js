import {React} from 'react';
import app from '../App.module.css'
import styles from '../styles/Blog.module.css'
import video from '../images/stars.mp4'


function Blog() {
    return (
        <>
            <video src={video}
                autoPlay
                loop
                muted/>
        <div className={app.Content}>
        <div className={app.Box}>
            <h3> Blog </h3> 
            </div>
            </div>
            </>
    );
}

export default Blog;
