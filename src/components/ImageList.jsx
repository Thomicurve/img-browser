import React from 'react';

function ImageList(props) {

    return (
        <div className="container-images">
            <div className="list-images">
                {props.image.map(val => {
                    return (
                        <div className="card-size" key={val.id}>
                            <div className="image-container">
                                <img src={val.largeImageURL} alt={val.tags} className="card-img-top" id="image-search" />
                            </div>
                            <div className="content-card">
                                <a href={val.pageURL} target="_blank" className="btn btn-primary" id="button-image">See full image</a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default ImageList;
