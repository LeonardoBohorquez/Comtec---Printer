import { BsPrinter } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { PiWarningOctagonBold } from "react-icons/pi";
import { CiStreamOff } from "react-icons/ci";



function ResumenEstadoImpresoras() {
    return (
        <div className="grid grid-cols-4">
            <div className="p-4 flex flex-row items-center justify-center gap-2">
                <div className="icono">
                    <BsPrinter className="p-2 rounded-full text-5xl bg-[#1069F5] text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2>Total de impresoras</h2>
                    <p className="text-3xl">4</p>
                </div>
            </div>
            <div className="p-4 flex flex-row items-center justify-center gap-2">
                <div className="icono">
                    <FaCheck  className="p-2 rounded-full text-5xl bg-[#16305C] text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2>Operativas</h2>
                    <p className="text-3xl">2</p>
                </div>
            </div>
            <div className="p-4 flex flex-row items-center justify-center gap-2">
                <div className="icono">
                    <PiWarningOctagonBold className="p-2 rounded-full text-5xl bg-[#16305C] text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2>Con alertas</h2>
                    <p className="text-3xl">1</p>   
                </div>
            </div>
            <div className="p-4 flex flex-row items-center justify-center gap-2">
                <div className="icono">
                    <CiStreamOff className="p-2 rounded-full text-5xl bg-[#16305C] text-white" />
                </div>
                <div className="titulo flex flex-col items-center justify-center">
                    <h2>Fuera de linea</h2>
                    <p className="text-3xl">1</p>
                </div>
            </div>
        </div>
    )
}

export default ResumenEstadoImpresoras