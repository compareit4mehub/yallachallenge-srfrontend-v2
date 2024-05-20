import axios from "axios";

export const getUsers = async () => {
    try {
        const response = await axios.get('https://api.github.com/users?since=1&per_page=60')
        return response.data;
    } catch (error) {
        console.log('unable to get user', error);
        throw error;
    }
} 