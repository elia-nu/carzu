import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/clientside/home'
import Navbar from './components/commen/navbar'
import Footer from './components/commen/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CarDetail, Payment} from './components/clientside/carDetail'
import SignUp from './components/clientside/signup'
import Login from './components/clientside/login'
import RentYourCar from './components/clientside/RentYourCar'
import Help from './components/clientside/Help'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Rent-Your-Car" element={<RentYourCar />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App