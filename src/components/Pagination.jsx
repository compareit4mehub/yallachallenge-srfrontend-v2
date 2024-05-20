import React from 'react';

const GetPagination = ({ usersDisplayCount, totalUsers, pagination, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersDisplayCount); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex flex-wrap justify-center items-center mt-2">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`cursor-pointer border m-1 px-3 py-1 border-gray-100 rounded-md 
            ${number === currentPage ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} 
            duration-200`}
        >
          <button
            onClick={() => pagination(number)}
            className="outline-none"
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GetPagination;
