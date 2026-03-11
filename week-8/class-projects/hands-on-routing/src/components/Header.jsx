import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between bg-gray-600 '>
      <img width='80px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyK9oaIYnSWqW3waOIj14bUudBZ_8KoWIlw&s" alt="" />
      <nav className='pl-10'>
        <ul className='flex justify-between w-100 m-5'>
          <li>
            <NavLink to="/" className={({isActive})=>isActive?"text-black-500 bg-blue-700 p-1.5":""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="ProductList"  className={({isActive})=>isActive?"text-black-600  bg-blue-700 p-1.5":""}>ProductList</NavLink>
          </li>
          <li>
            <NavLink to="ContactUs"  className={({isActive})=>isActive?"text-black-600  bg-blue-700 p-1.5":""}>ContactUs</NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Header;