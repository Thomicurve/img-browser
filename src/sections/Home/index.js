import React from 'react'

import CameraImage from '../../assets/images/Camera-blob.png';
import blob1 from '../../assets/svg/blob-1.svg';
import blob2 from '../../assets/svg/blob-2.svg';

import './styles.css'
export default function Home() {
    return (
        <main id="home" className="home-container">
            <article className="home-container__title">
                <div className="title__left-title">
                    <img src={CameraImage} alt="CameraImage" />
                </div>
                <div className="title__right-title">
                    <h1>Image Browser</h1>
                    <h2>With Pixabay API</h2>
                </div>
            </article>
            <img className="home-container__blob-1 blobs" src={blob1} alt="blob1" />
            <img className="home-container__blob-2 blobs" src={blob2} alt="blob2" />
        </main>
    )
}


