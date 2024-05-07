import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUser(response.data);
        };

        fetchUserDetails();
    }, [username]);

    useEffect(() => {
        const getFollowers = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/followers`);
                const topFollowers = response.data.slice(0, 5);
                setFollowers(topFollowers);
            } catch (error) {
                console.error('Error fetching followers:', error);
            };
        };
        getFollowers();
    }, [username]);

    return (
        <div className="user-details-container">
            <h1><i className="fas fa-user"></i> User Details</h1>
            {user && (
                <div>
                    <div className='user-avatar'>
                        <img src={user.avatar_url} alt={user.login} />
                    </div>
                    <div className='user-details'>
                        <h2>{user.login}</h2>
                        <p><i className="fas fa-user"></i> Name: {user.name}</p>
                        <p><i className="fas fa-users"></i> Followers: {user.followers}</p>
                        <p><i className="fas fa-user-friends"></i> Following: {user.following}</p>
                        <p><i className="fas fa-code"></i> Public Repos: {user.public_repos}</p>
                        <p><i className="fas fa-file-alt"></i> Gists: {user.public_gists}</p>
                        <p><i className="fas fa-info-circle"></i> Bio: {user.bio}</p>
                        <p><i className="fas fa-envelope"></i> Email: {user.email}</p>
                        <p><i className="fas fa-building"></i> Company: {user.company}</p>
                        <p><i className="fas fa-map-marker-alt"></i> Location: {user.location}</p>
                        <p><i className="fas fa-link"></i> Blog: <a href={user.blog}>{user.blog}</a></p>
                        <div className="followers-list">
                            <h3><i className="fas fa-users"></i> Top 5 Followers:</h3>
                            <div className='top-five'>
                                {followers.map(follower => (
                                    <div title={follower.login} key={follower.id}>
                                        <img className='follower-avatar' src={follower.avatar_url} alt={follower.login} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
