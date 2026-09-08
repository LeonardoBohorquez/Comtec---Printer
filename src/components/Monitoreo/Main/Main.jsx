import { Routes, Route } from "react-router-dom"
import Dashboard from "./DashBoard/Dashboard"
import Regiones from "./Regiones/Regiones"
import Alertas from "./Alertas/Alertas"
import Impresoras from "./Impresoras/Impresoras"
import Consumibles from "./Consumibles/Consumibles"
import Reportes from "./Reportes/Reportes"
import Tareas from "./Tareas/Tareas"
import Usuarios from "./Usuarios/Usuarios"

function Main() {
    return (
        <Routes>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Regiones" element={<Regiones />} />
            <Route path="Alertas" element={<Alertas />} />
            <Route path="Impresoras" element={<Impresoras />} />
            <Route path="Consumibles" element={<Consumibles />} />
            <Route path="Reportes" element={<Reportes />} />
            <Route path="Tareas" element={<Tareas />} />
            <Route path="Usuarios" element={<Usuarios />} />
        </Routes>
    )
}

export default Main