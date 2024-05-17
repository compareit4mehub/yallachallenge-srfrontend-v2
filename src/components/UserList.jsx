import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/api';
import { GetPagination, UserCard } from '.';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersDisplayCount] = useState(5);
    const { t } = useTranslation();

    // Page numbers 
    const indexOfLastUser = currentPage * usersDisplayCount;
    const indexOfFirstUser = indexOfLastUser - usersDisplayCount;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Method to get pages
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    const fetchUsersData = async () => {
        setLoading(true)
        const data = await getUsers();
        setUsers(data);
        setLoading(false)
        console.log(data);
    };
    useEffect(() => {
        fetchUsersData();
    }, []);



    return (
        <>
            {
                loading ?
                    <div className='absolute left-0 right-0 top-[50%] text-center'>{t('loading')}...</div>
                    :
                    currentUsers.map((user) => (
                        <>
                            <Link to={`/user/${user?.login}`} key={user.id} className='z-0 m-1 sm:w-2/12 w-full'>
                                <UserCard image={user?.avatar_url} login={user?.login} url={user?.html_url} />
                            </Link>
                        </>
                    ))
            }
            <div>
            <GetPagination
            usersDisplayCount={usersDisplayCount}
            totalUsers={users.length}
            pagination={handlePageChange}
            currentPage={currentPage}
          />
            </div>

        </>
    )
}
