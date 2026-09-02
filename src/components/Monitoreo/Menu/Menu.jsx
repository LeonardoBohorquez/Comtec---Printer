import { Link } from "react-router-dom"

//Imagenes
import logo from '../../../assets/img/ComtecGlobal.png'
//Iconos
import { FaRegChartBar } from "react-icons/fa";
import { BsPrinter } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { RxExit } from "react-icons/rx";




function Menu() {
    return (

        <nav className="menu bg-amber-50 w-1/8 p-4 h-screen flex flex-col justify-between">
            <ul className="menu-list flex flex-col mt-5 gap-4">
                <img className="" src={logo} alt="Logo Comtec Global" />
                <li className="p-3 m-1 rounded cursor-pointer hover:bg-blue-500 hover:text-white"> <Link to="" className="flex flex-row items-center gap-2 text-md"><FaRegChartBar /> Dashboard</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer hover:bg-blue-500 hover:text-white"> <Link to="" className="flex flex-row items-center gap-2 text-md"><BsPrinter  /> Impresoras</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer hover:bg-blue-500 hover:text-white"> <Link to="" className="flex flex-row items-center gap-2 text-md"><MdOutlineWaterDrop />Consumibles</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer hover:bg-blue-500 hover:text-white"> <Link to="" className="flex flex-row items-center gap-2 text-md"><TbReportAnalytics />Reportes</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer hover:bg-blue-500 hover:text-white"> <Link to="" className="flex flex-row items-center gap-2 text-md"><LuUsers />Usuarios</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer hover:bg-blue-500 hover:text-white"> <Link to="" className="flex flex-row items-center gap-2 text-md"><GoGear />Configuración</Link> </li>
            </ul>

            <button className="bg-[#021B76] text-white p-2 m-1 rounded cursor-pointer"> <Link to="/" className="flex flex-row items-center gap-2 text-md"><RxExit className="text-2xl" /> Cerrar Sesión</Link> </button>
        </nav>
    )
}

export default Menu