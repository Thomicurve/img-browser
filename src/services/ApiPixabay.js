import axios from 'axios';

const url = `https://pixabay.com/api/?key=14363980-72dcd34efca3ef6e4b8fa0dcc`

const GetImages = async (search = 'dogs') => {
    try {
        const { data } = await axios.get(`${url}&q=${search}`);

        if(!data.hits.length) {
            const { data } = await axios.get(`${url}&q='dogs'`);
            return data.hits;
        }else {
            return data.hits;
        }
    }catch(err) {
        throw new Error(err)
    }
}

export default GetImages;