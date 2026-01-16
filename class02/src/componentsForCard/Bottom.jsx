import React from 'react'

const Bottom = (props2) => {
  return (
    <div className='flex flex-col gap-3 w-full items-center '>
        <div className="h-20 w-60 bg-[#F6F6F6] rounded-2xl flex gao-2 px-3 py-2 justify-between shadow-lg shadow-blue-[#ffff] items-center">
           <div className="flex gap-1 flex-col items-center">
                <span className='font-bold'>{props2.bottominfo.info.likes}</span>
                <h5 className='text-[#9A9A9A]'>Likes</h5>
            </div>

             <div className="flex gap-1 flex-col items-center">
                <span className='font-bold'>{props2.bottominfo.info.posts}</span>
                <h5 className='text-[#9A9A9A]'>Posts</h5>
            </div>

            <div className="flex gap-1 flex-col items-center">
                <span className='font-bold'>{props2.bottominfo.info.views}</span>
                <h5   className='text-[#9A9A9A]'>Views</h5>
            </div>
        </div>

        <div className="flex gap-5 w-full justify-center items-center text-xl">
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-threads-line"></i>
        </div>
    </div>
  )
}

export default Bottom