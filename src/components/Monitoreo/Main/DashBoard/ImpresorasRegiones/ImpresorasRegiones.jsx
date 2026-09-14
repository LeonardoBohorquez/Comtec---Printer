import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

// Cambia estos colores para personalizar cada segmento del grafico.
const COLORS = ['#0088FE', '#00C49F'];

export default function PrinterChart() {
    // Lee primero localStorage y usa sessionStorage como respaldo porque la app actual guarda alli los datos.
    const datosGuardados = localStorage.getItem('parqueDT') || sessionStorage.getItem('parqueDT');
    const datos = datosGuardados ? JSON.parse(datosGuardados) : { parqueDT: [] };
    const impresoras = Array.isArray(datos)
        ? datos
        : Array.isArray(datos.parqueDT)
            ? datos.parqueDT
            : [];

    // Convierte contadores como "125,458" o "38.745" en numeros sumables.
    const convertirContador = (valor) => Number(String(valor ?? 0).replace(/[.,\s]/g, '')) || 0;

    // Cambia el campo de esta linea si el nombre del contador de impresiones cambia en el almacenamiento.
    const totalImpresiones = impresoras.reduce(
        (total, impresora) => total + convertirContador(impresora['CONTADOR TOTAL']),
        0
    );
    // Cambia el campo de esta linea si el nombre del contador de escaner cambia en el almacenamiento.
    const totalEscaneos = impresoras.reduce(
        (total, impresora) => total + convertirContador(impresora['CONTADOR SCANER']),
        0
    );

    const data = [
        { name: 'Impresiones', value: totalImpresiones },
        { name: 'Escaneos', value: totalEscaneos },
    ];

    return (
        <div className='bg-white p-4 '>
            {/* Cambia estas clases para ajustar el tamano y color del titulo. */}
            <h2 className="text-2xl text-[#16305C] font-bold mb-4">Escaner vs impresiones</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        // Cambia el formato de esta funcion para personalizar las etiquetas del grafico.
                        label={({ name, percent }) =>
                            `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`
                        }
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={entry.name}
                                // Cambia COLORS para modificar el color de cada segmento.
                                fill={COLORS[index]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}