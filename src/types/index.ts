// src/types.ts
export interface RecetasType {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    tiempo: number;
    categoria_id: number;
}

export interface CategoriasType {
    id: number;
    nombre: string;
    
}

export interface RecetasTypeProps {
    recetas: RecetasType[];
    categorias: CategoriasType[];
    getNombreCategoria: (idCategoria: number) => string
}
