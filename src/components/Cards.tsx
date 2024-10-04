import React from "react";
import { RecetasType } from "../types";

interface RecetasCardProps {
    receta: RecetasType;
    getNombreCategoria: (categoria_id: number) => string; 
}

const Cards: React.FC<RecetasCardProps> = ({ receta, getNombreCategoria }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
            <img className="w-full h-56 object-cover" src={receta.imagen} alt={receta.nombre} />
            <div className="p-6">
               
                <p className="inline-block border border-green-500 bg-green-100 text-green-600 rounded px-3 py-1 text-sm font-semibold mb-4">
                    {getNombreCategoria(receta.categoria_id)}
                </p>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{receta.nombre}</h2>
                <p className="text-gray-600 mb-4">{receta.descripcion}</p>
                <div className="flex justify-between items-center">
                  
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Ver receta
                    </button>

                    <div className="space-x-4">
                        <button className="text-blue-500 hover:underline">Editar</button>
                        <button className="text-red-500 hover:underline">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
