import { useState } from "react";
import { Container, TextField, Button, Paper, Box } from "@mui/material";
import type { Diretor } from "../../types/Diretor";

type Props = {
  data: Diretor[];
  setData: React.Dispatch<React.SetStateAction<Diretor[]>>;
  editando: Diretor | null;
  setEditando: React.Dispatch<React.SetStateAction<Diretor | null>>;
};

export default function CadDiretor({
  data,
  setData,
  editando,
  setEditando,
}: Props) {
  const [nome, setNome] = useState(editando?.nome ?? "");
  const [nacionalidade, setNacionalidade] = useState(editando?.nacionalidade ?? "");

  function handleSalvar() {
    if (!nome.trim() || !nacionalidade.trim()) return;

    if (editando) {
      setData(
        data.map((d) => (d.id === editando.id ? { ...d, nome, nacionalidade } : d)),
      );
      setEditando(null);
    } else {
      const novoId = Math.max(...data.map((d) => d.id)) + 1;
      setData([...data, { id: novoId, nome, nacionalidade }]);
    }

    setNome("");
    setNacionalidade("");
  }

  function handleCancelar() {
    setEditando(null);
    setNome("");
    setNacionalidade("");
  }

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <TextField
          component={Paper}
          label="Nome"
          variant="outlined"
          fullWidth
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <TextField
          component={Paper}
          label="Nacionalidade"
          variant="outlined"
          fullWidth
          value={nacionalidade}
          onChange={(e) => setNacionalidade(e.target.value)}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" fullWidth onClick={handleSalvar}>
            {editando ? "Atualizar" : "Salvar"}
          </Button>

          {editando && (
            <Button variant="outlined" fullWidth onClick={handleCancelar}>
              Cancelar
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}