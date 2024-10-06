import React from "react";
import { RecetasType } from "../types";

interface RecetasCardProps {
  receta: RecetasType;
  getNombresCategorias: (recetaId: number) => string[];
}

const Cards: React.FC<RecetasCardProps> = ({
  receta,
  getNombresCategorias,
}) => {
  const nombreCategorias = getNombresCategorias(receta.id);

  return (
    <div className="z-0 border border-white bg-white rounded shadow-md overflow-hidden max-w-md mx-auto flex flex-col h-full">
      <img
        className="w-full h-60 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
        src={receta.imagen}
        alt={receta.nombre}
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="flex space-x-2">
            {nombreCategorias.map((cat, index) => (
              <span key={index} className="border border-green-500 bg-green-100 text-green-600 rounded px-3 py-1 text-sm font-semibold">
                {cat}
              </span>
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {receta.nombre}
        </h2>
        <p className="text-gray-600 mb-4 flex-grow">{receta.descripcion}</p>

        <div className="mt-auto flex justify-between items-center">
          <button className="bg-lime-500 text-gray-950 px-4 py-2 rounded hover:bg-lime-200 duration-300 ease-in-out">
            Ver receta
          </button>

          <div className="space-x-4">
            <button className="text-slate-900">Editar</button>
            <button className="text-slate-900">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
