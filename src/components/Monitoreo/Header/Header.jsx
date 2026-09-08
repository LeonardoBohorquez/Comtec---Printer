
import { FaCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const contenidoPorRuta = { // datos de la ruta para el header
    "/Monitoreo/Dashboard": {
        titulo: "DASHBOARD",
        descripcion: "Resumen general del estado de tus impresoras",
    },
    "/Monitoreo/Regiones": {
        titulo: "REGIONES",
        descripcion: "Consulta la información de tus impresoras por región",
    },
    "/Monitoreo/Alertas": {
        titulo: "ALERTAS",
        descripcion: "Revisa las alertas y novedades de tus impresoras",
    },
    "/Monitoreo/Impresoras": {
        titulo: "IMPRESORAS",
        descripcion: "Consulta el estado y la información de tus impresoras",
    },
    "/Monitoreo/Consumibles": {
        titulo: "CONSUMIBLES",
        descripcion: "Consulta el estado de los consumibles de tus impresoras",
    },
    "/Monitoreo/Reportes": {
        titulo: "REPORTES",
        descripcion: "Genera y consulta reportes de tu sistema",
    },
    "/Monitoreo/Tareas": {
        titulo: "TAREAS",
        descripcion: "Gestiona y asigna tareas a tu equipo",
    },
    "/Monitoreo/Usuarios": {
        titulo: "USUARIOS",
        descripcion: "Consulta y modifica la información de tus perfiles de usuario",
    }
};

function Header() {
    const { pathname } = useLocation(); // obtiene la ruta actual
    const contenido = contenidoPorRuta[pathname] ?? contenidoPorRuta["/Monitoreo/Dashboard"]; // si la ruta no está definida, se muestra el contenido por defecto (Dashboard)

    return (
        <header className="header p-5 flex flex-row justify-between items-center gap-2 bg-[#FFFFFF]">
            <div className="titulo">
                <h1 className="text-2xl font-bold text-[#16305C]">{contenido.titulo}</h1>
                <p className="text-[#16305C]">{contenido.descripcion}</p>
            </div>
            <div className="usuario flex items-center gap-5 text-[#16305C]">
                <p>Hola, administrador</p>
                <p className=""><FaCircleUser className="text-5xl" /></p>
            </div>
        </header>
    );
}

export default Header;