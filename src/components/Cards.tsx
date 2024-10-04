import React from "react";
import { RecetasType } from "../types";

interface RecetasCardProps {
    receta: RecetasType;
    getNombreCategoria: (categoria_id: number) => string; 
}

const Cards: React.FC<RecetasCardProps> = ({ receta, getNombreCategoria }) => {
    return (
        <div className="border border-white bg-white rounded shadow-md overflow-hidden max-w-md mx-auto flex flex-col h-full">
            <img className="w-full h-56 object-cover" src={receta.imagen} alt={receta.nombre} />
            <div className="p-6 flex flex-col flex-grow">
              
                <p className="inline-block border border-green-500 bg-green-100 text-green-600 rounded px-3 py-1 text-sm font-semibold mb-4 max-w-max">
                    {getNombreCategoria(receta.categoria_id)}
                </p>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{receta.nombre}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{receta.descripcion}</p>
                

                <div className="mt-auto flex justify-between items-center">
                    <button className="bg-lime-500 text-gray-950 px-4 py-2 rounded hover:bg-green-600">
                        Ver receta
                    </button>

                    <div className="space-x-4">
                        <button className="text-slate-900 hover:underline">Editar</button>
                        <button className="text-slate-900 hover:underline">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
