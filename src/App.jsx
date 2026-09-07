import Login from './components/Login/Login'
import RecuperarContraseña from './components/RecuperarContraseña/RecuperarContraseña';
import CrearUsuario from './components/CrearUsuario/CrearUsuario';
import Monitoreo from './components/Monitoreo/Monitoreo';
import Menu from './components/Monitoreo/Menu/Menu';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {

 
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/RecuperarContraseña' element={<RecuperarContraseña />} />
        <Route path='/CrearUsuario' element={<CrearUsuario />} />
        <Route path='/Monitoreo' element={<Monitoreo />} />
        <Route path='/Menu' element={<Menu/>} />
      </Routes>
    </>
  )
}

export default App
