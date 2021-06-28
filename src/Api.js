import axios from 'axios';

const apiURL = 'http://localhost:3000/api';

export const getTodos = () => {
    return axios.get(`${apiURL}/todos`)
        .then(response => response.data);
};

export const addTodo = todoData => {
    return axios.post(`${apiURL}/todos`, todoData)
        .then(response => response.data);
};