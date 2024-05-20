// src/utils/fetchUsers.js
import axios from 'axios';

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://api.github.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export default fetchUsers;
