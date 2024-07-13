import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Infos from './Pages/Infos'
import LineUp from './Pages/LineUp'
import RunningOrder from './Pages/RunningOrder'
import Shop from './Pages/Shop'
import Tickets from './Pages/Tickets'
import NotFound from './Pages/NotFound'
import MainLayout from './Components/MainLayout/MainLayout'


//composant MainLayout autour de chaque page pour afficher la Navbar, sauf la page NotFound qui n'en a pas besoin

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/infos" element={<MainLayout><Infos /></MainLayout>} />
        <Route path="/lineup" element={<MainLayout><LineUp /></MainLayout>} />
        <Route path="/runningorder" element={<MainLayout><RunningOrder /></MainLayout>} />
        <Route path="/shop" element={<MainLayout><Shop /></MainLayout>} />
        <Route path="/tickets" element={<MainLayout><Tickets /></MainLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;