import { Link } from "react-router-dom"
import logo from '../../../assets/img/ComtecGlobal.png'


function Menu() {
    return (

        <nav className="menu bg-amber-50 w-1/8 p-4 h-screen flex flex-col justify-between">
            <ul className="menu-list flex flex-col mt-5">
                <img className="" src={logo} alt="Logo Comtec Global" />
                <li className=" bg-blue-500 text-white p-2 m-1 rounded cursor-pointer"> <Link to="">Dashboard</Link> </li>
                <li className=" bg-blue-500 text-white p-2 m-1 rounded cursor-pointer"> <Link to="">Impresoras</Link> </li>
                <li className=" bg-blue-500 text-white p-2 m-1 rounded cursor-pointer"> <Link to="">Consumibles</Link> </li>
                <li className=" bg-blue-500 text-white p-2 m-1 rounded cursor-pointer"> <Link to="">Reportes</Link> </li>
                <li className=" bg-blue-500 text-white p-2 m-1 rounded cursor-pointer"> <Link to="">Usuarios</Link> </li>
                <li className=" bg-blue-500 text-white p-2 m-1 rounded cursor-pointer"> <Link to="">Configuración</Link> </li>
            </ul>

            <button className="bg-red-500 text-white p-2 m-1 rounded cursor-pointer"> <Link to="/">Cerrar Sesión</Link> </button>
        </nav>
    )
}

export default Menu