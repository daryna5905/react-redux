import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const usersAPI = {
  fetchAllUsers: async () => {
    const res = await axios.get(`${BASE_URL}/users/`);
    return res.data;
  },
  fetchByAlbum: async (userId) => {
    const res = await axios.get(`${BASE_URL}/users/${userId}/albums`);
    return res.data;
  },
};
