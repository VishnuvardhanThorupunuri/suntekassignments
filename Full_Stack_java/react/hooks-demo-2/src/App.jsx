import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UdtName from './components/UdtName'
import Student from './components/Student'
import Effect from './components/Effect'
import Users from './components/Users'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      <Header name="anurag"/>
      <UdtName name="Ravivarma" age="21"/>
      <Student></Student>
      <Effect></Effect>
      <Users>




      </Users>
      
      <Footer name="university"/>
    </>
  )
}

export default App
