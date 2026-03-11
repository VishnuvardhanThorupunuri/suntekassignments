import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import AddUser from './components/AddUser'
import RootLayout from './components/RootLayout'
import User from './components/User'
import UsersList from './components/UsersList'

function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/addUser",
          element:<AddUser/>
        },
        {
          path:"/user",
          element:<User/>
        },
        {
          path:"/UserList",
          element:<UsersList/>
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={routerObj}/>
  )
}

export default App