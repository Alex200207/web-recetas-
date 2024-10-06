import React, { useState } from "react";
import RecipeCard from "../components/Cards";
import { RecetasTypeProps } from "../types";

const Page: React.FC<RecetasTypeProps> = ({ recetas,getNombresCategoria}) => {
  const [selectedTab, setSelectedTab] = useState<string>("Recetas");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-4 px-4 bg-gray-950 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            {/*no supe que hacer */}
            <span className="text-slate-50">R</span>
            <span className="text-slate-50">e</span>
            <span className="text-slate-50">c</span>
            <span className="text-slate-50">e</span>
            <span className="text-lime-500">t</span>
            <span className="text-lime-500">a</span>
            <span className="text-slate-50">s</span>
          </h1>
        </div>

        <div className="flex items-center">
          <nav className="ml-6">
            <ul className="flex space-x-4">
              <li
                className={`cursor-pointer ${
                  selectedTab === "Recetas"
                    ? "text-lime-500 font-bold"
                    : "text-neutral-700"
                } hover:underline`}
                onClick={() => handleTabClick("Recetas")}
              >
                Recetas
              </li>
              <li
                className={`cursor-pointer ${
                  selectedTab === "Categorías"
                    ? "text-lime-500 font-bold"
                    : "text-neutral-700"
                } hover:underline`}
                onClick={() => handleTabClick("Categorías")}
              >
                Categorías
              </li>
              <li
                className={`cursor-pointer ${
                  selectedTab === "Agregar"
                    ? "text-lime-500 font-bold"
                    : "text-neutral-700"
                } hover:underline`}
                onClick={() => handleTabClick("Agregar")}
              >
                Agregar
              </li>
            </ul>
          </nav>

          <div className="z-10 relative inline-block text-left ml-6">
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://i.pinimg.com/736x/3e/f9/5e/3ef95eb2be325c976ac5e33d3efb1224.jpg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full "
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <div className="px-4 py-2">
                  <p className="text-sm font-bold text-gray-900">
                    La mera yuca
                  </p>
                  <p className="text-xs text-gray-500">
                    alexTalavera.gmail.com
                  </p>
                </div>
                <div className="border-t border-gray-100"></div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Configuración
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Cerrar sesión
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mr-24 ml-24">
          {recetas.map((receta) => (
            <RecipeCard
              key={receta.id}
              getNombresCategorias={getNombresCategoria}
              receta={receta}
            
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
