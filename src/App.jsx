import Login from './components/Login/login'
import RecuperarContraseña from './components/RecuperarContraseña/RecuperarContraseña';
import CrearUsuario from './components/CrearUsuario/CrearUsuario';
import { Toaster } from 'react-hot-toast';
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  const usuarios = [
    {
    usuario:"admin",
    contraseña:"1234",
    email:"admin@comtec.com",
    },
    {
    usuario:"lbohorquez",
    contraseña:"468255",
    email:"lbohorquez@comtec.com",
    },
    {
    usuario:"guest",
    contraseña:"0000",
    email:"quest@comtec.com",
    }
]
  
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Login listado ={usuarios} />} />
        <Route path='/RecuperarContraseña' element={<RecuperarContraseña listado={usuarios} />} />
        <Route path='/CrearUsuario' element={<CrearUsuario listado={usuarios} />} />
      </Routes>
    </>
  )
}

export default App
