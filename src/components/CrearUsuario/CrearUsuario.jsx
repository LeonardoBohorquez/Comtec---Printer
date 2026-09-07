import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { showToast } from "nextjs-toast-notify";
import logo from '../../assets/img/ComtecGlobal.png'
import imgForm from '../../assets/img/imgForm.png'
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { LuDelete } from "react-icons/lu";


function CrearUsuario() {
    const [usuario, setUsuario] = useState("")
    const [numero, setNumero] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [repetirContraseña, setRepetirContraseña] = useState("")
    const [mostrarContraseñaUno, setMostrarContraseñaUno] = useState(false);
    const [mostrarContraseñaDos, setMostrarContraseñaDos] = useState(false);
    const toastMostrado = useRef(false);
    
    function Validar(e) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        e.preventDefault(); //evitar que se recargue la página al enviar el formulario

        if (!usuario || !numero || !email || !contraseña || !repetirContraseña) { //validar que todos los campos esten llenos
            if (!toastMostrado.current) {

                showToast.warning("Por favor, complete todos los campos.", {
                    duration: 2000,
                    progress: true,
                    position: "top-center",
                    transition: "bounceIn",
                });

                toastMostrado.current = true;

                setTimeout(() => {
                    toastMostrado.current = false;
                }, 2000);
            }
            return
        }

        if (usuarios.some(u => u.email === email)) { //validar que el correo electronico no este en uso
            if (!toastMostrado.current) {

                showToast.warning("El correo electrónico ya está en uso.", {
                    duration: 2000,
                    progress: true,
                    position: "top-center",
                    transition: "bounceIn",
                });

                toastMostrado.current = true;

                setTimeout(() => {
                    toastMostrado.current = false;
                }, 2000);
            }
            return;
        }

        if (contraseña !== repetirContraseña) { //validar que las contraseñas coincidan
            if (!toastMostrado.current) {

                showToast.warning("Las contraseñas no coinciden.", {
                    duration: 2000,
                    progress: true,
                    position: "top-center",
                    transition: "bounceIn",
                });

                toastMostrado.current = true;

                setTimeout(() => {
                    toastMostrado.current = false;
                }, 2000);
            }
            return
        }

        if (contraseña.length < 8) { //validar que la contraseña tenga al menos 8 caracteres
            if (!toastMostrado.current) {

                showToast.warning("La contraseña debe tener al menos 8 caracteres.", {
                    duration: 2000,
                    progress: true,
                    position: "top-center",
                    transition: "bounceIn",
                });

                toastMostrado.current = true;

                setTimeout(() => {
                    toastMostrado.current = false;
                }, 2000);
            }

            return
        }

        const nuevoUsuario = { //guardar los datos del usuario en un objeto
            usuario: usuario,
            numero: numero,
            email: email,
            contraseña: contraseña
        };

        usuarios.push(nuevoUsuario); //guardar los datos del usuario en un array

        localStorage.setItem("usuarios", JSON.stringify(usuarios)); //guardar los datos del usuario en el localStorage

        showToast.success("Usuario creado con éxito.", {
            duration: 2000,
            progress: true,
            position: "top-center",
            transition: "bounceIn",
        });

        resetearFormulario(); //resetear los campos del formulario

    }

    function resetearFormulario() { //resetear los campos del formulario
        setUsuario("");
        setNumero("");
        setEmail("");
        setContraseña("");
        setRepetirContraseña("");
    }

    return (
        <div className="container m-auto flex justify-center items-center  h-screen">
            <div className="formulario flex flex-row w-3/4 overflow-hidden rounded-2xl shadow-xl ">
                <form onSubmit={Validar} className="flex flex-col justify-center text-center gap-4 pl-5 pr-5 bg-[#FFFFFF]">
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
                    <button type="button" className="flex  justify-center  items-center relative bg-[#021B76] text-white p-2 text-xl cursor-pointer rounded-xl  hover:bg-[#000155]" onClick={resetearFormulario} ><LuDelete className='absolute left-30 text-2xl' />Resetear</button>
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