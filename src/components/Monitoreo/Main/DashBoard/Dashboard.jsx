import ResumenEstadoImpresoras from "./ResumenEstadoImpresoras/ResumenEstadoImpresoras";
import ModelosImpresoras from "./ModelosImpresoras/ModelosImpresoras";
import ImpresorasRegiones from "./ImpresorasRegiones/ImpresorasRegiones";

function Dashboard() {
    return (
        <div className="dashboard">
            <ResumenEstadoImpresoras />
            <div className="graficos grid grid-cols-3 items-start gap-5 p-2">
                <ModelosImpresoras />
                <ImpresorasRegiones />
            </div>
        </div>  
    )
}

export default Dashboard