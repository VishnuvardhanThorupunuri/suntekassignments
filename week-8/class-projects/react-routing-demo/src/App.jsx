import {createBrowserRouter,Navigate,RouterProvider} from 'react-router';
import RootLayout from "./components/RootLayout";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Java from "./components/Java";
import Nodejs from "./components/Nodejs";
import Vue from "./components/Vue";


function App() {

  //routing configuration
  const routingObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
        path:"",
        element:<Home/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"Login",
          element:<Login/>
        },
        {
          path:"Technologies",
          element:<Technologies/>,
          children:[
            {
              path:"java",
              element:<Java/>
            },
            {
              path:"nodejs",
              element:<Nodejs/>
            },
            {
              path:"vue",
              element:<Vue/>
            },
            {
              path:"",
              element:<Navigate to="java"/>
            }
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={routingObj}/>;
  
}

export default App;