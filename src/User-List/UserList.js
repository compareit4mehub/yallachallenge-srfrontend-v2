import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://api.github.com/users?per_page=5&page=${page}`);
      setUsers(response.data);
    };

    fetchUsers();
  }, [page]);

  return (
    <div>
      <div className='header'>
        <h1><i className="fas fa-users"></i> User List</h1>
      </div>
      <div className='cards'>
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.login}</h2>
            <Link to={{ pathname: `/user/${user.login}` }}>View Profile</Link>
          </div>
        ))}
      </div>
      <div className='pagination'>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UserList;
