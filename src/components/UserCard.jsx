import React from 'react'

export default function UserCard({ ...props }) {
  return (
    <>
      <div className='  text-center w-full border bg-gray-50 rounded-lg shadow-md px-4 py-3  border-gray-200 '>
        <img src={props?.image} className='w-36 rounded-full h-36 mx-auto' />
        <div className='mt-5 flex flex-col justify-between'>
          <h2 className='text-[22px] uppercase  text-black font-semibold'>{props?.login}</h2>
          {/* <a href={props?.url} target='_blank' className='text-blue-500 underline text-1xl z-10'>Read more</a> */}
        </div>
      </div>
    </>
  )
}
