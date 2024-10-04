import { useEffect, useState } from "react";
import { API_URL } from "../constant/constant";
import { RecetasType, CategoriasType } from "../types";

const useRecetas = () => {
  const [recetas, setRecetas] = useState<RecetasType[]>([]);
  const [categorias, setCategoria] = useState<CategoriasType[]>([]);

  useEffect(() => {
    obtenerRecetas();
    obtenerCategoria();
  }, []);

  const obtenerRecetas = async () => {
    try {
      const res = await fetch(`${API_URL}/recetas`);
      const data = await res.json();
      setRecetas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerCategoria = async () => {
    try {
      const res = await fetch(`${API_URL}/categorias`);
      const data = await res.json();
      setCategoria(data);
    } catch (error) {
      console.error("Hubo un error al obtener las categorias", error);
    }
  };

  const getNombreCategoria = (idCategoria: number): string => {
    const categoria = categorias.find((cat) => cat.id === idCategoria);
    return categoria?.nombre || "Sin categoría";
  };

  return {
    recetas,
    categorias,
    getNombreCategoria,
  };
};

export default useRecetas;
