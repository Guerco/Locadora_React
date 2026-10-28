import { useState } from "react";
import { Container, Typography, Alert  } from "@mui/material";
import type { Genero } from "../../types/Genero";

import CadGenero from "../../components/Genero/CadGenero";
import TabelaGenero from "../../components/Genero/TabelaGenero";

const dados: Genero[] = [
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
];

export default function GerenciarGeneros() {
  const [listaGeneros, setListaGeneros] = useState<Genero[]>(dados);
  const [editando, setEditando] = useState<Genero | null>(null);

  return (
    <Container>
      <Typography variant="h3">Gerenciar Gêneros</Typography>

      <CadGenero
        key={editando?.id ?? "novo"}
        data={listaGeneros}
        setData={setListaGeneros}
        editando={editando}
        setEditando={setEditando}
      />

      <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
        Dê um duplo clique em qualquer registro para editá-lo
      </Alert>

      <TabelaGenero
        data={listaGeneros}
        onEdit={setEditando}
        onDelete={(id) =>
          setListaGeneros(listaGeneros.filter((g) => g.id !== id))
        }
      />
    </Container>
  );
}