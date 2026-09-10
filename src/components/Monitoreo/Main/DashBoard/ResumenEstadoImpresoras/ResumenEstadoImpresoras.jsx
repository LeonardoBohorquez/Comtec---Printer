import { BsPrinter } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { PiWarningOctagonBold } from "react-icons/pi";
import { CiStreamOff } from "react-icons/ci";
import { TbCancel } from "react-icons/tb";


function ResumenEstadoImpresoras() {

        const parqueDT         = JSON.parse(sessionStorage.getItem('parqueDT')); // Recuperar los datos del sessionStorage
        const impresorasTotal  = parqueDT.parqueDT.length; // Obtener la cantidad de impresoras
        const operativas       = parqueDT.parqueDT.filter( impresoras => impresoras.ESTADO === "Operativa").length; // Obtener la cantidad de impresoras operativas
        const conAlertas       = parqueDT.parqueDT.filter( impresoras => impresoras.ESTADO === "Alerta").length; // Obtener la cantidad de impresoras con alertas
        const fueraDeLinea     = parqueDT.parqueDT.filter( impresoras => impresoras.ESTADO === "Desconectado").length; // Obtener la cantidad de impresoras fuera de línea
        const error            = parqueDT.parqueDT.filter( impresoras => impresoras.ESTADO === "Error").length; // Obtener la cantidad de impresoras con error

    return (
        <div className="grid grid-cols-5 gap-5 p-2">
            <div className="p-4 flex flex-row items-center justify-center rounded gap-5 bg-white">
                <div className="icono">
                    <BsPrinter className="p-2 rounded-full text-5xl bg-[#1069F5] text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2 className="text-2xl text-[#16305C]">Total de impresoras</h2>
                    <p className="text-4xl text-[#16305C] font-bold"> {impresorasTotal}</p>
                </div>
            </div>
            <div className="p-4 flex flex-row items-center justify-center gap-2 bg-white">
                <div className="icono">
                    <FaCheck className="p-2 rounded-full text-5xl bg-green-600 text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2 className="text-2xl text-[#16305C]">Operativas</h2>
                    <p className="text-4xl text-[#16305C] font-bold">{operativas}</p>
                </div>
            </div>
            <div className="p-4 flex flex-row items-center justify-center gap-2 bg-white">
                <div className="icono">
                    <PiWarningOctagonBold className="p-2 rounded-full text-5xl bg-orange-500 text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2 className="text-2xl text-[#16305C]">Con alertas</h2>
                    <p className="text-4xl text-[#16305C] font-bold">{conAlertas}</p>
                </div>
            </div>
            <div className="p-4 flex flex-row items-center justify-center gap-2 bg-white">
                <div className="icono">
                    <TbCancel className="p-1 rounded-full text-5xl bg-red-500 text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2 className="text-2xl text-[#16305C]">Con error</h2>
                    <p className="text-4xl text-[#16305C] font-bold"> {error} </p>
                </div>
            </div>
            <div className="p-4 flex flex-row items-center justify-center gap-2 bg-white">
                <div className="icono">
                    <CiStreamOff className="p-2 rounded-full text-5xl bg-[#16305C] text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2 className="text-2xl text-[#16305C]">Fuera de linea</h2>
                    <p className="text-4xl text-[#16305C] font-bold">{fueraDeLinea}</p>
                </div>
            </div>
        </div>
    )
}

export default ResumenEstadoImpresoras