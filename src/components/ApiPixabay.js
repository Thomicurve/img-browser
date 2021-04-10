import axios from 'axios';


const GetImages = async (search)=>{
    const res = await axios.get(`https://pixabay.com/api/?key=14363980-72dcd34efca3ef6e4b8fa0dcc&q="${search}"`);
    return res.data.hits;
}

export default GetImages;