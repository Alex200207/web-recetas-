export interface RecetasType{
    id: number,
    nombre: string,
    descripcion: string,
    imagen: string
    tiempo: number

}

export interface RecetasTypeProps{
    recetas: RecetasType[];

}