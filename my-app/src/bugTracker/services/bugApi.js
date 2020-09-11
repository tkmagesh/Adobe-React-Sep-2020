import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'http://localhost:3030/bugs'
});

async function getAll(){
    const response = await axiosInstance.get('/')
    return response.data;
}

async function get(id){
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
}

async function save(bugData){
    console.log(bugData);
    if (bugData.id === 0){
        const response = await axiosInstance.post('/', bugData);
        return response.data;
    } else {
        const response = await axiosInstance.put(`/${bugData.id }`, bugData);
        return response.data;
    }
}

async function remove(bugData){
    const response = await axiosInstance.delete(`/${bugData.id}`);
    return response.data;
}

export default { getAll, get, save, remove };