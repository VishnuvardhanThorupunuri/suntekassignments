import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between bg-gray-600'>
      <img width='80px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyK9oaIYnSWqW3waOIj14bUudBZ_8KoWIlw&s" alt="" />
      <nav className='pl-10'>
        <ul className='flex  gap-10 w-100 m-5'>
          <li>
            <NavLink to="/" className={({isActive})=>isActive?"text-orange-400 bg-amber-600":""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="productList"  className={({isActive})=>isActive?"text-green-400 bg-amber-400":""}>ProductList</NavLink>
          </li>
          <li>
            <NavLink to="contactus"  className={({isActive})=>isActive?"text-amber-400 bg-amber-800":""}>ContactUs</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;