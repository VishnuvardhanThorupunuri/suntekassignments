import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import Products from './components/Products'
import ProductList from './components/ProductList'
import RootLayout from './components/RootLayout'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactUs from './components/ContactUs'

function App() {
  // routerin config
     const routingObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
        path:"/",
        element:<Home/>
        },

        {
          path:"ProductList",
          element:<ProductList/>,
        },
        {
              
          path:"Products",
          element:<Products/>
  
        },
          
        
        {
          path:"contactus",
          element:<ContactUs/>
        }
        
         
      ]
    }
  ])

  return <RouterProvider router = {routingObj} />;
}

export default App