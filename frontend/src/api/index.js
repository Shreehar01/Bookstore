import axios from 'axios';

// Base URL
const API = axios.create({baseURL: "http://localhost:5000"});

// Adding headers to an API request.
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

// User 
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const updateInformation = (personalInformation) => API.get('/user/updateinformation', personalInformation);

// HeartPost
export const fetchHeartPosts = (pageNumber) => API.get(`/heartposts?page=${pageNumber}`);
export const createHeartPost = (heartpost) => API.post('/heartposts/', heartpost);
export const updateHeartPost = (id, updatedHeartPost) => API.patch(`/heartposts/${id}`, updatedHeartPost);
export const deleteHeartPost = (id) => API.delete(`/heartposts/${id}`);
