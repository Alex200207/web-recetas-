import { useEffect, useState } from "react";
import { API_URL } from "../constant/constant";
import { RecetasType } from "../types";

const useRecetas = () => {
    const [recetas, setRecetas] = useState<RecetasType[]>([]);

    useEffect(() => {
        obtenerRecetas();
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

    return {
        recetas,
    };
};

export default useRecetas;
