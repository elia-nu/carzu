import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'leaflet/dist/leaflet.css';
import Home from './components/clientside/home'
import Navbar from './components/commen/navbar'
import Footer from './components/commen/footer'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import {CarDetail, Payment} from './components/clientside/carDetail'
import SignUp from './components/clientside/signup'
import Login from './components/clientside/login'
import RentYourCar from './components/clientside/RentYourCar'
import Help from './components/clientside/Help'

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`${isHomePage ? 'bg-cover bg-center bg-fixed h-screen ' : ' bg-cover bg-center bg-fixed h-screen md:h-[80vh]'}`} style={isHomePage ? {backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')"} : {}}>
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
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />

    </Router>
  )
}

export default App
