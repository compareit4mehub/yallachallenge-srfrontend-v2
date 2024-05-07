import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './UserDetails.css';

const UserDetails = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const { t, i18n } = useTranslation(); // Use useTranslation to access i18n

    const changeLocaleToArabic = () => {
        i18n.changeLanguage('ar');
        document.documentElement.dir = 'rtl';
        // window.location.reload();
    };

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

    if (!user) {
        return <div>Loading...</div>; // Display loading indicator while user data is being fetched
    }

    return (
        <div className="user-details-container">
            <h1><i className="fas fa-user"></i> {t('translation.userDetails')}</h1>
            <button onClick={changeLocaleToArabic}>Rtl?</button>
            <div className='user-details'>
                <h2>{user.login}</h2>
                <p><i className="fas fa-user"></i> {t('translation.name')}: {user.name}</p>
                <p><i className="fas fa-users"></i> {t('translation.followers')}: {user.followers}</p>
                <p><i className="fas fa-user-friends"></i> {t('translation.following')}: {user.following}</p>
                <p><i className="fas fa-code"></i> {t('translation.publicRepos')}: {user.public_repos}</p>
                <p><i className="fas fa-file-alt"></i> {t('translation.gists')}: {user.public_gists}</p>
                <p><i className="fas fa-info-circle"></i> {t('translation.bio')}: {user.bio}</p>
                <p><i className="fas fa-envelope"></i> {t('translation.email')}: {user.email}</p>
                <p><i className="fas fa-building"></i> {t('translation.company')}: {user.company}</p>
                <p><i className="fas fa-map-marker-alt"></i> {t('translation.location')}: {user.location}</p>
                <p><i className="fas fa-link"></i> {t('translation.blog')}: <a href={user.blog}>{user.blog}</a></p>
                <div className="followers-list">
                    <h3>{t('translation.topFiveFollowers')}</h3>
                    {followers.map(follower => (
                        <div key={follower.id}>
                            <img className='follower-avatar' src={follower.avatar_url} alt={follower.login} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
