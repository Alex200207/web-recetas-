// src/types.ts
export interface RecetasType {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    tiempo: number;
    categoria_id: number

    
   
}

export interface CategoriasType {
    id: number;
    nombre: string;
}
export interface RecetasCategoriasType {
    recetas_id: number;
    categorias_id: number;
  }
  


export interface RecetasTypeProps {
    recetas: RecetasType[];
    categorias: CategoriasType[];
    getNombresCategoria: (recetaId: number) => string[]
   
}
