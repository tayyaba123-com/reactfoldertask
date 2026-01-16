import React from 'react'

const Bottom = () => {
  return (
    <div className='flex flex-col gap-3 w-full items-center '>
        <div className="h-20 w-60 bg-[#F6F6F6] rounded-2xl flex gao-2 px-3 py-2 justify-between shadow-lg shadow-blue-[#ffff] items-center">
           <div className="flex gap-1 flex-col items-center">
                <span className='font-bold'>345</span>
                <h5 className='text-[#9A9A9A]'>Likes</h5>
            </div>

             <div className="flex gap-1 flex-col items-center">
                <span className='font-bold'>843</span>
                <h5 className='text-[#9A9A9A]'>Posts</h5>
            </div>

            <div className="flex gap-1 flex-col items-center">
                <span className='font-bold'>349</span>
                <h5   className='text-[#9A9A9A]'>Views</h5>
            </div>
        </div>

        <div className="flex gap-2 w-full justify-center items-center text-xl">
            <i class="ri-instagram-line"></i>
            <i class="ri-twitter-x-line"></i>
            <i class="ri-threads-line"></i>
        </div>
    </div>
  )
}

export default Bottom