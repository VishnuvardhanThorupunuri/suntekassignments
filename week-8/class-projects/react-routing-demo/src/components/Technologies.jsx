import React from 'react'
import { Outlet } from 'react-router';

function Technologies() {
  return (
    <div className='mt-10'>
        <nav>
            <ul className="flex justify-around text-2xl">
                <li>
                    <NavLink to ="/">Technologies</NavLink>
                </li>
                <li>
                    <NavLink to ="java">Java</NavLink>
                </li>
                <li>
                    <NavLink to ="nodejs">Nodejs</NavLink>
                </li>
                <li>
                    <NavLink to ="technologies">Vue</NavLink>   
                </li>
            </ul>
            {/* Placeholder for children of Technologies */}
            <Outlet/>
        </nav>
    </div>
  )
}

export default Technologies;