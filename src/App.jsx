import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import data from './data/parqueDT.json'
import Login from './components/Login/login';
import RecuperarContraseña from './components/RecuperarContraseña/RecuperarContraseña';
import CrearUsuario from './components/CrearUsuario/CrearUsuario';
import Monitoreo from './components/Monitoreo/Monitoreo';
import Menu from './components/Monitoreo/Menu/Menu';
import './App.css'


function App() {

  useEffect(() => {
    // Guardar los datos en el sessionStorage
    sessionStorage.setItem('parqueDT', JSON.stringify(data));
  }, []);


  return (
    <>
      <Toaster />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/RecuperarContraseña' element={<RecuperarContraseña />} />
        <Route path='/CrearUsuario' element={<CrearUsuario />} />
        <Route path='/Monitoreo/*' element={<Monitoreo />} />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
