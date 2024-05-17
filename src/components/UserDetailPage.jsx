import axios from 'axios';
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function UserDetailPage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState([]);
  const { t } = useTranslation();



  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://api.github.com/users/${name}`);
        const followerResponse = await axios.get(`https://api.github.com/users/${name}/followers`);
        setFollowers(followerResponse.data);
        setUser(response.data);
        setLoading(false)

        console.log(response.data, 'user details');
      } catch (error) {
        console.log('unable to get data on user detail page', error);
      }

    };
    fetchUser();
  }, [name]);


  return (
    <>
      {
        loading ?
          <div className='absolute left-0 right-0 top-[50%] text-center'>{t('loading')}...</div>
          :
          <>
            
            <div className='w-[90%] mx-auto'>
              <button className='bg-black rounded-md px-6 py-1 text-white mb-5' onClick={() => navigate(-1)}>{t('back')}</button>
              <div className="flex flex-wrap">
                <div className="sm:w-5/12 w-full px-4">
                  <img src={user?.avatar_url} alt={user?.login} className='rounded-md h-96 w-full object-cover mx-auto' />
                </div>
                <div className="sm:w-7/12 w-full sm:pl-5 pl-0"  >
                  <h1 className='font-bold text-2xl uppercase mb-1'>{user?.name}</h1>
                  <p className='font-medium text-1xl mb-1 capitalize'>{t('login')}: <span className='font-semibold' >{user?.login || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('followers')}: <span className='font-semibold'>{user?.followers || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('following')}: <span className='font-semibold'>{user?.following || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('gists')}: <span className='font-semibold'>{user?.public_gists || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('repo')}: <span className='font-semibold'>{user?.public_repos || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('bio')}: <span className='font-semibold'>{user?.bio || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('email')}: <span className='font-semibold'>{user?.email || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('location')}: <span className='font-semibold'>{user?.location || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('company')}: <span className='font-semibold'>{user?.company || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('blog')}: <span className='font-semibold'>{user?.blog || 'N/A'}</span></p>
                  <p className='font-medium text-1xl mb-1 capitalize  '>{t('top')} 5 {t('followers')}:</p>
                  <ul className='flex items-center justify-start'>
                    {
                      followers.slice(0, 5).map((follower) => (
                        <li key={follower.id} className='flex justify-between items-center m-2'>
                          <img src={follower?.avatar_url} className='w-10 h-10 rounded-full object-cover' alt="" />
                          <p className='font-thin'>{follower?.login}</p>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>

            </div>
          </>
      }
    </>

  );
};
