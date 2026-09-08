import { Link } from "react-router-dom"
//Imagenes
import logo from '../../../assets/img/ComtecGlobal.png'
//Iconos
import { FaRegChartBar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { BsPrinter } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { TbReport } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { RxExit } from "react-icons/rx";

function Menu() {
    return (    
        <nav className="menu bg-[#FFFFFF] p-4 flex flex-col justify-between text-lg">
            <ul className="menu-list flex flex-col gap-2">
                <img className="" src={logo} alt="Logo Comtec Global" />
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Dashboard" className="flex flex-row items-center gap-2 text-md"><FaRegChartBar /> Dashboard</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Regiones" className="flex flex-row items-center gap-2 text-md"><FiMapPin /> Regiones</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Alertas" className="flex flex-row items-center gap-2 text-md"><HiOutlineBellAlert /> Alertas</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Impresoras" className="flex flex-row items-center gap-2 text-md"><BsPrinter  /> Impresoras</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Consumibles" className="flex flex-row items-center gap-2 text-md"><MdOutlineWaterDrop />Consumibles</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Reportes" className="flex flex-row items-center gap-2 text-md"><TbReportAnalytics />Reportes</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Tareas" className="flex flex-row items-center gap-2 text-md"><TbReport />Tareas</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Usuarios" className="flex flex-row items-center gap-2 text-md"><LuUsers />Usuarios</Link> </li>
                <li className="p-3 m-1 rounded cursor-pointer text-[#16305C] hover:bg-[#1069F5] hover:text-white"> <Link to="/Monitoreo/Configuracion" className="flex flex-row items-center gap-2 text-md"><GoGear />Configuración</Link> </li>
            </ul>
            <button className="p-3 m-1 rounded cursor-pointer text-white hover:bg-[#1069F5] hover:text-white bg-[#16305C]"> <Link to="/" className="flex flex-row items-center gap-2 text-md"><RxExit className="text-2xl" /> Cerrar Sesión</Link> </button>
        </nav>
    )
}

export default Menu