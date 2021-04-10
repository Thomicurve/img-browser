import React, { useEffect, useState } from 'react';
import ApiPixabay from './ApiPixabay';

import ImageList from './ImageList.jsx';

function Header() {

    const [images, setImages] = useState([]);
    const [imageName, setImageName] = useState('');

    const handleSearch = (e) => {
        setImageName(e.target.value);
    }

    const sendImage = async (e) => {
        e.preventDefault();

        if (imageName.trim("").length === 0) return alert('The form can´t be empty');
        const imagesApi = await ApiPixabay(imageName);
        await setImages(imagesApi);
    }

    useEffect(() => {
        console.log(images);
    }, [images])

    return (
        <div>
            <header className='container'>
                <div className="row">
                    <div className="col my-5">
                        <h1 className='text-light text-center'>IMAGE BROWSER</h1>
                        <h3 className="text-primary text-center">With Pixabay API</h3>
                    </div>

                </div>
                <div className="row my-2">
                    <div className="col">
                        <form onSubmit={sendImage}>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder="any things..."
                                            onChange={handleSearch} />
                                    </div>
                                </div>
                                <div className="row my-4 me-auto">
                                    <div className="col-auto button-cont">
                                        <button
                                            type="submit"
                                            className='btn btn-success'
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
            <div className="list my-5">
                <ImageList image={images} />
            </div>
        </div>

    )
}

export default Header;