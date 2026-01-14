import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
            <h1>Horizon Corts</h1>
        <div className="links">
            <a className='link1' href="/">About Us</a>
            <a href="/">Services</a>
            <a href="/">Coaches</a>
            <a href="./">Events</a>
            <a href="./">Contacts</a>
        </div>
        <button><span>Book now</span><i class="ri-arrow-right-up-long-line"></i></button>
    </div>
  )
}

export default Navbar