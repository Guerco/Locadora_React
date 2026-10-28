import { useState } from "react";
import { Container, Typography, Alert } from "@mui/material";
import type { Diretor } from "../../types/Diretor";

import CadDiretor from "../../components/Diretor/CadDiretor";
import TabelaDiretor from "../../components/Diretor/TabelaDiretor";

const dados: Diretor[] = [
  { id: 1, nome: "Steven Spielberg", nacionalidade: "Estados Unidos" },
  { id: 2, nome: "Christopher Nolan", nacionalidade: "Reino Unido" },
  { id: 3, nome: "Quentin Tarantino", nacionalidade: "Estados Unidos" },
  { id: 4, nome: "Martin Scorsese", nacionalidade: "Estados Unidos" },
  { id: 5, nome: "Alfred Hitchcock", nacionalidade: "Reino Unido" },
  { id: 6, nome: "Akira Kurosawa", nacionalidade: "Japão" },
  { id: 7, nome: "Francis Ford Coppola", nacionalidade: "Estados Unidos" },
  { id: 8, nome: "David Fincher", nacionalidade: "Estados Unidos" },
  { id: 9, nome: "Pedro Almodóvar", nacionalidade: "Espanha" },
  { id: 10, nome: "Federico Fellini", nacionalidade: "Itália" },
  { id: 11, nome: "James Cameron", nacionalidade: "Canadá" },
  { id: 12, nome: "Peter Jackson", nacionalidade: "Nova Zelândia" },
  { id: 13, nome: "Hayao Miyazaki", nacionalidade: "Japão" },
  { id: 14, nome: "Glauber Rocha", nacionalidade: "Brasil" },
];

export default function GerenciarDiretores() {
  const [listaDiretores, setListaDiretores] = useState<Diretor[]>(dados);
  const [editando, setEditando] = useState<Diretor | null>(null);

  return (
    <Container>
      <Typography variant="h3">Gerenciar Diretores</Typography>

      <CadDiretor
        key={editando?.id ?? "novo"}
        data={listaDiretores}
        setData={setListaDiretores}
        editando={editando}
        setEditando={setEditando}
      />

      <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
        Dê um duplo clique em qualquer registro para editá-lo
      </Alert>
      
      <TabelaDiretor
        data={listaDiretores}
        onEdit={setEditando}
        onDelete={(id) =>
          setListaDiretores(listaDiretores.filter((d) => d.id !== id))
        }
      />
    </Container>
  );
}