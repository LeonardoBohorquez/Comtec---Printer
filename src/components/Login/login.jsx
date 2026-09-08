import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { showToast } from "nextjs-toast-notify";
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/ComtecGlobal.png'
import imgForm from '../../assets/img/imgForm.png'

function Login() {
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const navigate = useNavigate();
    const toastMostrado = useRef(false);

    const Validar = (e) => {
        e.preventDefault()

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Recuperar el array de usuarios desde localStorage
        const busqueda = usuarios.find((item) => item.usuario === usuario && item.contraseña === contraseña) //Validacion de existencia de usuario.

        if (usuario === "" || contraseña === "") { // validacion de campos vacios

            if (toastMostrado.current) return;

            toastMostrado.current = true;

            showToast.warning("Todos los campos deben estar completados", {
                duration: 1500,
                progress: true,
                position: "top-center",
                transition: "popUp",
            });

            setTimeout(() => {
                toastMostrado.current = false;
            }, 1500);

            return;
        }

        if (busqueda) { // Si el usuario existe, mostrar mensaje de bienvenida y redirigir a la página de monitoreo

            if (toastMostrado.current) return; // desactiva el toast si ya se ha mostrado uno recientemente

            toastMostrado.current = true;

            showToast.success(" Bienvenido " + usuario, {
                duration: 1500,
                progress: true,
                position: "top-center",
                transition: "popUp",
            });

            setTimeout(() => {
                toastMostrado.current = false;
                navigate("/Monitoreo/Dashboard"); // Redirigir a la página de monitoreo después de 1.5 segundos
            }, 1500);

            return;

        } else {

            console.log(busqueda)
            showToast.error(" Usuario o contraseña incorrecto ", {
                duration: 1500,
                position: "top-center",
                transition: "popUp",
            });

        }

        setUsuario("") // reset de input usuario
        setContraseña("") // rerset de input contraseña
    }

    return (
        <div className="container m-auto flex justify-center items-center  h-screen">
            <div className="formulario flex flex-row w-3/4 overflow-hidden rounded-2xl shadow-xl ">
                <form className="flex flex-col justify-center text-center gap-4 pl-5 pr-5 bg-[#FFFFFF]">
                    <div className="logo flex justify-center">
                        <img src={logo} alt="Logo" className="w-3/5" />
                    </div>
                    <h3 className="text-[#94A3B8] font-semibold">Soluciones de impresión para tu empresa</h3>
                    <h2 className="text-[#021B76] text-5xl font-bold ">Iniciar Sesión</h2>
                    <h3 className="text-[#64748B] text-lg font-semibold">Ingresa tus credenciales para acceder a tu cuenta</h3>
                    <div className="input-group  p-4 flex items-center rounded-lg border border-[#94A3B8] focus-within:border-[#5BA3FF]">
                        <FaRegUser className='text-2xl mr-2 text-[#94A3B8] ' />
                        <input type="text" className="w-full focus:outline-none text-[#64748B] text-xl" id="usuario" placeholder="Ingrese usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    </div>
                    <div className="input-group p-4 flex items-center rounded-lg border border-[#94A3B8] focus-within:border-[#5BA3FF]">
                        <IoKeyOutline className='text-2xl mr-2 text-[#94A3B8] ' />
                        <input type={mostrarPassword ? "text" : "password"} className="w-full focus:outline-none text-[#64748B] text-xl" id="contraseña" placeholder="Ingrese contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                        <button type="button" onMouseDown={() => setMostrarPassword(true)} onMouseUp={() => setMostrarPassword(false)} onMouseLeave={() => setMostrarPassword(false)}>
                            {mostrarPassword ? (
                                <FaEye className="text-2xl text-[#94A3B8] cursor-pointer" />
                            ) : (
                                <FaEyeSlash className="text-2xl text-[#94A3B8] cursor-pointer" />
                            )}
                        </button>
                    </div>
                    <button type="submit" className="bg-[#021B76] text-white  p-4 text-xl cursor-pointer rounded-xl  hover:bg-[#000155]" onClick={Validar}>Conectar</button>
                    <Link href="" to="/RecuperarContraseña" className="text-[#2563EB] hover:underline text-xl">¿Olvidaste tu contraseña?</Link>
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
                    <p className="text-[#021B76]  text-lg font-medium ">
                        ¿No tienes cuenta? <Link to="/CrearUsuario" className="text-[#2563EB] hover:underline"> Regístrate aquí</Link>
                    </p>
                </form>
                <div className="imagen">
                    <img src={imgForm} alt="Formulario" className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default Login