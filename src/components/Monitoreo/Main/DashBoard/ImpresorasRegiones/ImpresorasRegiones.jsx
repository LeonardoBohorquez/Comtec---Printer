import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const impresiones = 8000;
const escaneos = 2000;

const data = [
    { name: 'Impresiones', value: impresiones },
    { name: 'Escaneos', value: escaneos },
];

const COLORS = ['#0088FE', '#00C49F'];

export default function PrinterChart() {
    return (
        <div className='bg-white p-4 '>
            <h2 className="text-2xl text-[#16305C] font-bold mb-4">Scaner vs impresiones</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) =>
                            `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`
                        }
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={entry.name}
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