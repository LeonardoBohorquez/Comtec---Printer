import Login from './components/Login/login'
import RecuperarContraseña from './components/RecuperarContraseña/RecuperarContraseña';
import CrearUsuario from './components/CrearUsuario/CrearUsuario';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useState } from 'react';

function App() {

  const [dataUsuarios, setDataUsuarios] = useState([{
    usuario: "admin",
    contraseña: "1234",
    email: "admin@comtec.com",
  },
  {
    usuario: "lbohorquez",
    contraseña: "468255",
    email: "lbohorquez@comtec.com",
  },
  {
    usuario: "guest",
    contraseña: "0000",
    email: "quest@comtec.com",
  }])

  const agregarUsuario = (nuevoUsuario) => {
    setDataUsuarios(prevUsuarios => [
      ...prevUsuarios,
      nuevoUsuario
    ]);
  };

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Login listado={dataUsuarios} />} />
        <Route path='/RecuperarContraseña' element={<RecuperarContraseña listado={dataUsuarios} />} />
        <Route path='/CrearUsuario' element={<CrearUsuario agregarUsuarios={agregarUsuario} listado={dataUsuarios} />} />
      </Routes>
    </>
  )
}

export default App
