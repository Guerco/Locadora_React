import { useState } from "react";
import type { Genero } from "../../types/Genero";

export const useListaGeneros = () => {
    const [listaGeneros, setListaGeneros] = useState<Genero[]>([
        { id: 1,  descricao: "Romance" },
        { id: 2,  descricao: "Ficção Científica" },
        { id: 3,  descricao: "Fantasia" },
        { id: 4,  descricao: "Terror" },
        { id: 5,  descricao: "Suspense" },
        { id: 6,  descricao: "Thriller" },
        { id: 7,  descricao: "Aventura" },
        { id: 8,  descricao: "Drama" },
        { id: 9,  descricao: "Comédia" },
        { id: 10, descricao: "Policial" },
        { id: 11, descricao: "Biografia" },
        { id: 12, descricao: "História" },
        { id: 13, descricao: "Infantil" },
        { id: 14, descricao: "Animação" },
    ]);

    return { listaGeneros, setListaGeneros };
};