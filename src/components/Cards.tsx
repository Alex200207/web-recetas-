// src/components/Cards.tsx
import React from "react";
import { RecetasType } from "../types";

interface RecetasCardProps{
    receta: RecetasType;
}



const Cards: React.FC<RecetasCardProps> = ({ receta }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={receta.imagen} alt={receta.nombre} />
      <div className="p-4">

        <h2 className="text-xl font-bold mb-2 text-slate-900">{receta.nombre}</h2>
        <p className="text-gray-600 mb-4">{receta.descripcion}</p>
        <div className="flex justify-between items-center">
          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
            Ver receta
          </button>
          <div className="space-x-2">
            <button className="text-blue-500 hover:underline">Editar</button>
            <button className="text-red-500 hover:underline">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
