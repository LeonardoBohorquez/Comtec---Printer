import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";

function ModelosImpresoras() {

  const parqueDT = JSON.parse(sessionStorage.getItem('parqueDT'));

  const modelos = Object.values( // modificar el objeto para que sea un array de objetos con las propiedades MODELO y CANTIDAD
    parqueDT.parqueDT.reduce((acc, impresora) => {

      const modelo = impresora.MODELO; // Obtener el modelo de la impresora

      if (!acc[modelo]) { // Si el modelo no existe en el objeto, crear un nuevo objeto con las propiedades MODELO y CANTIDAD
        acc[modelo] = { 
          MODELO: modelo,
          CANTIDAD: 0
        };
      }

      acc[modelo].CANTIDAD++; // Incrementar la cantidad de impresoras del modelo

      return acc;
    }, {})
  ).sort((a, b) => b.CANTIDAD - a.CANTIDAD);; // organizar el array de objetos por la propiedad CANTIDAD de mayor a menor


  return (
    <div className="bg-white rounded p-4">
      <h2 className="text-2xl text-[#16305C] font-bold mb-4">Cantidad por modelos</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={modelos} layout="vertical" margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <XAxis type="number" tick={false} axisLine={false} />
          <YAxis type="category" dataKey="MODELO" width={150} tick={{ fontSize: 12, fill: '#16305C', }} />
          <Bar dataKey="CANTIDAD" fill="#1069F5">
            <LabelList dataKey="CANTIDAD" position="right"  fill="#16305C" fontSize={17} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

}

export default ModelosImpresoras;