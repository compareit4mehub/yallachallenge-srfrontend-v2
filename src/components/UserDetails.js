// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${match.params.username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [match.params.username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt={user.login} />
      <p>Name: {user.name}</p>
      <p>Followers: {user.followers}</p>
      {/* Display other user details */}
    </div>
  );
};

export default UserDetails;
