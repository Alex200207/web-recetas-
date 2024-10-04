// src/pages/Page.tsx
import React from "react";
import RecipeCard from "../components/Cards";
import {  RecetasTypeProps } from "../types";


const Page: React.FC<RecetasTypeProps > = ({recetas, getNombreCategoria}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 px-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-500">Recetas</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline">Recetas</li>
            <li className="hover:underline">Categorías</li>
            <li className="hover:underline">Agregar</li>
          </ul>
        </nav>
      </header>
      <main className="px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recetas.map((recetas) => (
            <RecipeCard
            key={recetas.id}
            getNombreCategoria={getNombreCategoria}
            receta={recetas}

            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
