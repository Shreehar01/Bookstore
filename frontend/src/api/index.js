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
export const updateInformation = (personalInformation) => API.patch('/user/updateinformation', personalInformation);

// Books
export const createBook = (bookInformation) => API.post('/book/createbook', bookInformation);
export const getBooks = () => API.get(`/book/getbooks`);
export const getAllBooks = (search) => API.post(`/book/getallbooks/${search}`);
export const updateBook = (id, bookInfo) => API.post(`/book/updatebook/${id}`, bookInfo);
export const deleteBook = (id) => API.delete(`/book/deletebook/${id}`);

export const createRequest = (requestInformation) => API.post('/request/createrequest', requestInformation);
export const getRequests = () => API.get(`/request/getrequests`);
export const updateRequest = (id, requestInfo) => API.post(`/request/updaterequest/${id}`, requestInfo);
export const deleteRequest = (id) => API.delete(`/request/deleterequest/${id}`);

export const sendMail = (mailInformation) => API.post('/user/sendmail', mailInformation);
export const sendMultipleMails = (selectedBook) => API.post('/user/sendmultiplemails', selectedBook);