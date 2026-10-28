import type { Filme } from "./Filme";

export type Copia = {
    id: number;
    codigo: string;
    alugado: boolean;
    filme: Filme;
}