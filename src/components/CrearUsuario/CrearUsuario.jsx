import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { showToast } from "nextjs-toast-notify";
import logo from '../../assets/img/ComtecGlobal.png'
import imgForm from '../../assets/img/imgForm.png'
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { LuDelete } from "react-icons/lu";


function CrearUsuario({ listado }) {
    const [usuario, setUsuario] = useState("")
    const [numero, setNumero] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [repetirContraseña, setRepetirContraseña] = useState("")
    const [mostrarContraseñaUno, setMostrarContraseñaUno] = useState(false);
    const [mostrarContraseñaDos, setMostrarContraseñaDos] = useState(false);
    const toastMostrado = useRef(false);


    const mensaje = (e) => {

        const correo = listado.some(usuario => usuario.email === email)

        e.preventDefault()

        if (usuario === "" || numero === "" || email === "" || contraseña === "" || repetirContraseña === "") {

            if (toastMostrado.current) return;

            toastMostrado.current = true;

            showToast.warning("Todos los campos deben estar completados", {
                duration: 3000,
                progress: true,
                position: "top-center",
                transition: "popUp",
                icon: '',
                sound: true,
            });

            setTimeout(() => {
                toastMostrado.current = false;
            }, 3000);

            return;
        }

        if (correo) {

            if (toastMostrado.current) return;

            toastMostrado.current = true;

            showToast.warning("El correo ya se encuentra registrado", {
                duration: 3000,
                progress: true,
                position: "top-center",
                transition: "popUp",
                icon: '',
                sound: true,
            });

            setTimeout(() => {
                toastMostrado.current = false;
            }, 3000);

            return;

        }

        if (contraseña !== repetirContraseña) {

            showToast.warning("Las contraseñas deben de coincidir", {
                duration: 3000,
                progress: true,
                position: "top-center",
                transition: "popUp",
                icon: '',
                sound: true,
            });

            setTimeout(() => {
                toastMostrado.current = false;
            }, 3000);

            return;

        }

        toastMostrado.current = true;

        showToast.success("Usuario registrado", {
            duration: 3000,
            progress: true,
            position: "top-center",
            transition: "popUp",
            icon: '',
            sound: true,
        });

        setTimeout(() => {
            toastMostrado.current = false;
        }, 3000);

        resetearForm()

    }

    const resetearForm = () => {

        setUsuario("")
        setNumero("")
        setEmail("")
        setContraseña("")
        setRepetirContraseña("")
    }

    return (
        <div className="container m-auto flex justify-center items-center  h-screen">
            <div className="formulario flex flex-row w-3/4 overflow-hidden rounded-2xl shadow-xl ">
                <form onSubmit={mensaje} className="flex flex-col justify-center text-center gap-4 pl-5 pr-5 bg-[#FFFFFF]">
                    <div className="logo flex justify-center">
                        <img src={logo} alt="Logo" className="max-w-3/6" />
                    </div>
                    <h2 className="text-[#021B76] text-4xl font-bold ">Crea tu cuenta</h2>
                    <h3 className="text-[#64748B] text-md font-semibold">Completa el formulario para crear tu cuenta y comenzar a usar ComtecPrinter</h3>
                    <div className="input-group  p-2 flex items-center rounded-lg border border-[#94A3B8] focus-within:border-[#5BA3FF]">
                        <FaRegUser className='text-2xl mr-5 text-[#94A3B8] ' />
                        <input type="text" className="w-full focus:outline-none text-[#64748B] text-xl" id="usuario" placeholder="Ingrese usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    </div>
                    <div className="input-group  p-2 flex items-center rounded-lg border border-[#94A3B8] focus-within:border-[#5BA3FF]">
                        <FiPhone className='text-2xl mr-5 text-[#94A3B8] ' />
                        <input type="number" className=" no-spinner w-full focus:outline-none text-[#64748B] text-xl" id="correo" placeholder="Ingrese numero de telefono" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </div>
                    <div className="input-group  p-2 flex items-center rounded-lg border border-[#94A3B8] focus-within:border-[#5BA3FF]">
                        <TfiEmail className='text-2xl mr-5 text-[#94A3B8] ' />
                        <input type="email" className="w-full focus:outline-none text-[#64748B] text-xl" id="correo" placeholder="Ingrese correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group p-2 flex items-center rounded-lg border border-[#94A3B8] focus-within:border-[#5BA3FF]">
                        <IoKeyOutline className='text-2xl mr-5 text-[#94A3B8] ' />
                        <input type={mostrarContraseñaUno ? "text" : "password"} className="w-full focus:outline-none text-[#64748B] text-xl" id="contraseña" placeholder="Ingrese contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                        <button type="button" onMouseDown={() => setMostrarContraseñaUno(true)} onMouseUp={() => setMostrarContraseñaUno(false)} onMouseLeave={() => setMostrarContraseñaUno(false)}>
                            {mostrarContraseñaUno ? (
                                <FaEye className="text-2xl text-[#94A3B8] cursor-pointer" />
                            ) : (
                                <FaEyeSlash className="text-2xl text-[#94A3B8] cursor-pointer" />
                            )}
                        </button>
                    </div>
                    <div className="input-group p-2 flex items-center rounded-lg border border-[#94A3B8] focus-within:border-[#5BA3FF]">
                        <IoKeyOutline className='text-2xl mr-5 text-[#94A3B8] ' />
                        <input type={mostrarContraseñaDos ? "text" : "password"} className="w-full focus:outline-none text-[#64748B] text-xl" id="contraseña" placeholder="Repetir contraseña" value={repetirContraseña} onChange={(e) => setRepetirContraseña(e.target.value)} />
                        <button type="button" onMouseDown={() => setMostrarContraseñaDos(true)} onMouseUp={() => setMostrarContraseñaDos(false)} onMouseLeave={() => setMostrarContraseñaDos(false)}>
                            {mostrarContraseñaDos ? (
                                <FaEye className="text-2xl text-[#94A3B8] cursor-pointer" />
                            ) : (
                                <FaEyeSlash className="text-2xl text-[#94A3B8] cursor-pointer" />
                            )}
                        </button>
                    </div>
                    <button type="submit" className="flex  justify-center  items-center relative bg-[#021B76] text-white p-2 text-xl cursor-pointer rounded-xl  hover:bg-[#000155]"><RiUserAddLine className='absolute left-30 text-2xl' />Crear usuario</button>
                    <button type="button" className="flex  justify-center  items-center relative bg-[#021B76] text-white p-2 text-xl cursor-pointer rounded-xl  hover:bg-[#000155]" onClick={resetearForm}><LuDelete className='absolute left-30 text-2xl' />Resetear</button>
                    <Link to='/' className="flex justify-center items-center border border-[#64748B] p-2 text-xl text-[#64748B] cursor-pointer rounded-xl relative"><GoArrowLeft className=' absolute left-20 text-3xl ' /><span>Volver al Inicio</span> </Link>
                </form>
                <div className="imagen">
                    <img src={imgForm} alt="Formulario" className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default CrearUsuario