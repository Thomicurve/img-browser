import axios from 'axios';

const url = `https://pixabay.com/api/?key=14363980-72dcd34efca3ef6e4b8fa0dcc`

const GetImages = async (search) => {
    let method = '';
    !search ? method = '' : method = `&q=${search}`;

    try {
        const { data } = await axios.get(`${url}${method}`);
        return data.hits;
    }catch(err) {
        throw new Error(err)
    }
}

export default GetImages;