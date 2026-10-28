import type { Diretor } from "./Diretor";
import type { Genero } from "./Genero";

export type Filme = {
    id: number;
    titulo: string;
    genero: Genero;
    diretor: Diretor;   
}