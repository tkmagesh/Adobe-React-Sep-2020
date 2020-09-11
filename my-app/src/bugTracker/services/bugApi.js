import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'http://localhost:3030/'
});

async function getAll(){
    const response = await axiosInstance.get('/bugs')
    return response.data;
}

async function get(id){
    const response = await axiosInstance.get(`/bugs/${id}`);
    return response.data;
}

async function save(bugData){
    console.log(bugData);
    if (bugData.id === 0){
        const response = await axiosInstance.post('/bugs', bugData);
        return response.data;
    } else {
        const response = await axiosInstance.put(`/bugs/${bugData.id }`, bugData);
        return response.data;
    }
}

async function remove(bugData){
    const response = await axiosInstance.delete(`/bugs/${bugData.id}`);
    return response.data;
}

export default { getAll, get, save, remove };