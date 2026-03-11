import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
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
          path:"productList",
          element:<ProductList/>,
        },
        {      
          path:"product",
          element:<Product/>
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