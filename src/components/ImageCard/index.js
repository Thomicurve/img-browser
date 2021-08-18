import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload, faHeart} from '@fortawesome/free-solid-svg-icons'
import './styles.css'
export default function ImageCard({img}) {
    return (
        <div className="image-card">
            <img className="image-card__image-source" src={img.largeImageURL} alt={img.tags}/>
            <div className="image-card__text-image">
                <p className="text-image__description">{img.downloads}<FontAwesomeIcon className="image-icon" icon={faDownload}/></p>
                <p className="text-image__description">{img.likes}<FontAwesomeIcon className="image-icon" icon={faHeart}/></p>
            </div>
        </div>
    )
}
