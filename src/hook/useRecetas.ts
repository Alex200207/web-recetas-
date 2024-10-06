import { useEffect, useState } from "react";
import { API_URL } from "../constant/constant";
import { RecetasType, CategoriasType, RecetasCategoriasType } from "../types";

const useRecetas = () => {
  const [recetas, setRecetas] = useState<RecetasType[]>([]);
  const [categorias, setCategorias] = useState<CategoriasType[]>([]);
  const [recetasCategorias, setRecetasCategorias] = useState<RecetasCategoriasType[]>([]);

  useEffect(() => {
    obtenerRecetas();
    obtenerCategorias();
    obtenerRecetasCategorias();
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

  const obtenerCategorias = async () => {
    try {
      const res = await fetch(`${API_URL}/categorias`);
      const data = await res.json();
      setCategorias(data);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerRecetasCategorias = async () => {
    try {
      const res = await fetch(`${API_URL}/recetas_categorias`);
      const data = await res.json();
      setRecetasCategorias(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  const getNombresCategorias = (recetaId: number): string[] => {
    const categoriasIds = recetasCategorias
      .filter((rel) => rel.recetas_id === recetaId)
      .map((rel) => rel.categorias_id);

    return categoriasIds.map((idCategoria) => {
      const categoria = categorias.find((cat) => cat.id === idCategoria);
      return categoria?.nombre || "Sin categoría";
    });
  };

  return {
    recetas,
    categorias,
    getNombresCategorias,
  };
};

export default useRecetas;
