import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../../assets/img/ComtecGlobal.png'
import imgForm from '../../assets/img/imgForm.png'
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";


function RecuperarContraseña({listado}) {
    const [email, setEmail] = useState("")

    const mensaje = (e) => {
        e.preventDefault()

        const busqueda = listado.find((item) => item.email === email)

        busqueda ? toast.success("Se ha enviado el correo para la recuperacion de contraseña ", { id: "login-success", duration: 3000, })
            :
            toast.error("Correo electronico no existente", { id: "login-error", duration: 3000, });

        setEmail("")
    }

    return (
        <div className="container m-auto flex justify-center items-center  h-screen">
            <div className="formulario flex flex-row w-3/4 overflow-hidden rounded-2xl shadow-xl ">
                <form className="flex flex-col justify-center text-center gap-4 pl-5 pr-5 bg-[#FFFFFF]">
                    <div className="logo flex justify-center">
                        <img src={logo} alt="Logo" className="w-3/5" />
                    </div>
                    <h2 className="text-[#021B76] text-4xl font-bold ">¿Olvidaste tu contraseña?</h2>
                    <h3 className="text-[#64748B] text-md font-semibold">No te preocupes, ingresa tu correo electronico y te enviaremos las instrucciones para restablecerla.</h3>
                    <div className="input-group  p-4 flex items-center rounded-lg border border-[#94A3B8] focus-within:border-[#5BA3FF]">
                        <TfiEmail className='text-2xl mr-5 text-[#94A3B8] ' />
                        <input type="email" className="w-full focus:outline-none text-[#64748B] text-xl" id="correo" placeholder="Ingrese correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="flex  justify-center  items-center relative bg-[#021B76] text-white p-4 text-xl cursor-pointer rounded-xl  hover:bg-[#000155]" onClick={mensaje}><IoIosSend className='absolute left-20 text-3xl' />Enviar Instrucciones</button>
                    <div className="flex justify-center items-center w-full">
                        {/* Línea izquierda */}
                        <div className="flex-1 h-px bg-[#D9E7FF]" />
                        {/* Letra "o" */}
                        <span className="px-4 text-sm text-[#64748B]">
                            o
                        </span>
                        {/* Línea derecha */}
                        <div className="flex-1 h-px bg-[#D9E7FF]" />
                    </div>
                    <Link to='/' className="flex justify-center items-center border border-[#64748B] p-4 text-xl text-[#64748B] cursor-pointer rounded-xl relative"><GoArrowLeft className=' absolute left-20 text-3xl ' /><span>Volver al Inicio</span> </Link>
                </form>
                <div className="imagen">
                    <img src={imgForm} alt="Formulario" className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default RecuperarContraseña