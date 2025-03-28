import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-48 shadow-lg pl-7 my-2'>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <li>Shorts</li>
            <li>videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-medium mt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-medium mt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default SideBar