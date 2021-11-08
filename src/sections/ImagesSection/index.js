import React, { useEffect, useState } from 'react'
import Loader from "react-loader-spinner";

import ImagesAPI from '../../services/ApiPixabay';
import ImageCard from '../../components/ImageCard';

import blob1 from '../../assets/svg/blob-3.svg';
import blob2 from '../../assets/svg/blob-3.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
export default function ImagesSection() {

    const [images, setImages] = useState([]);
    const [imageName, setImageName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    function handleImageName(e) {
        setImageName(e.target.value);
    }

    async function RandomImages() {
        const results = await ImagesAPI();
        setImages(results);
        setIsLoading(false);
    }

    async function callImagesApi(event) {
        event.preventDefault();

        const results = await ImagesAPI(imageName);
        setImages(results);
    }

    useEffect(() => {
        RandomImages()
    }, [])


    return (
        <section id="images" className="images-container">
            <article className="images-container__browser">
                <h3 className="browser__title mb-5">Images</h3>
                <form className="browser__form">
                    <input type="text" onChange={handleImageName} className="" placeholder="Search any image..." />
                    <button onClick={callImagesApi}><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </article>
            <article className="images-container__images-list">
                {images.map(img => {
                    return <ImageCard key={img.id} img={img} />
                })}
            </article>
            {isLoading &&
                <div className="loader-container">
                    <Loader
                        type="Circles"
                        color="#F238B4"
                        height={100}
                        width={100}
                    />
                    <h5>Loading...</h5>
                </div>
            }

            <img className="images-container__blob-1 blobs" src={blob1} alt="blob figure" />
            <img className="images-container__blob-2 blobs" src={blob2} alt="blob figure" />
        </section>
    )
}
