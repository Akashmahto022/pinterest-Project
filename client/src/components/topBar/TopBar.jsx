import React from 'react'
import "./topBar.css"
import UserButton from '../userButton/UserButton';

const Topbar = () => {
  return (
    <div className='topBar'>
      {/* Search */}

      <div className='search'>
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='search' />

        {/* user */}
      </div>
      <UserButton />
    </div>
  )
}

export default Topbar;