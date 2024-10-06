import React, { useState } from "react";
import RecipeCard from "../components/Cards";
import { RecetasTypeProps } from "../types";
import { IoMdClose } from "react-icons/io";

const Page: React.FC<RecetasTypeProps> = ({ recetas, getNombresCategoria }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Recetas");
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-2 md:px-4">
      <header className="py-4 px-0 md:px-4 bg-gray-950 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
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
          <button
            onClick={toggleDropdown}
            className="md:hidden flex items-center space-x-2"
          >
            <img
              src="https://i.pinimg.com/736x/3e/f9/5e/3ef95eb2be325c976ac5e33d3efb1224.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </button>

          {isMenuOpen && (
            <div className="px-8 pt-10 pb-6 fixed top-0 left-0 w-full h-auto bg-white z-50">
              <nav className="flex flex-col space-y-4">
                <div className="py-2 flex items-center gap-2">
                  <img
                    src="https://i.pinimg.com/736x/3e/f9/5e/3ef95eb2be325c976ac5e33d3efb1224.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-base font-medium text-neutral-900">
                      La mera yuca
                    </p>
                    <p className="text-xs text-gray-500">
                      alexTalavera.gmail.com
                    </p>
                  </div>
                </div>
                <ul>
                  <li className="p-2 text-lg">
                    <a
                      className={`cursor-pointer ${
                        selectedTab === "Recetas"
                          ? "text-lime-500 txt-lg font-bold"
                          : "text-neutral-700"
                      } hover:underline`}
                      onClick={() => handleTabClick("Recetas")}
                    >
                      Recetas
                    </a>
                  </li>
                  <li className="p-2">
                    <a
                      className={`cursor-pointer ${
                        selectedTab === "Categorías"
                          ? "text-lime-500 font-bold"
                          : "text-neutral-700"
                      } hover:underline`}
                      onClick={() => handleTabClick("Categorías")}
                    >
                      Categorías
                    </a>
                  </li>
                  <li className="p-2">
                    <a
                      className={`cursor-pointer ${
                        selectedTab === "Agregar"
                          ? "text-lime-500 font-bold"
                          : "text-neutral-700"
                      } hover:underline`}
                      onClick={() => handleTabClick("Agregar")}
                    >
                      Agregar
                    </a>
                  </li>
                </ul>
                <hr />
                <a href="#" className="text-neutral-600 font-medium">
                  Configuración
                </a>
                <button className="text-black bg-lime-500 rounded px-4 py-2 font-medium">
                  Cerrar Sesión
                </button>
              </nav>
              <button
                onClick={toggleDropdown}
                className="absolute top-4 right-4 text-white"
              >
                <i className="text-lime-500 text-lg font-black">
                  <IoMdClose />
                </i>
              </button>
            </div>
          )}

          <nav className="hidden md:flex ml-6">
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

          <div className="hidden md:block z-10 relative inline-block text-left ml-6">
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://i.pinimg.com/736x/3e/f9/5e/3ef95eb2be325c976ac5e33d3efb1224.jpg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
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
      <main className="px-0 py-6 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 mx-0 md:mx-24">
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
