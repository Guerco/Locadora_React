import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Paper,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import type { Copia } from "../../types/Copia";
import type { Filme } from "../../types/Filme";

type Props = {
  data: Copia[];
  setData: React.Dispatch<React.SetStateAction<Copia[]>>;
  editando: Copia | null;
  setEditando: React.Dispatch<React.SetStateAction<Copia | null>>;
  filmes: Filme[];
};

export default function CadCopia({
  data,
  setData,
  editando,
  setEditando,
  filmes,
}: Props) {
  const [codigo, setCodigo] = useState(editando?.codigo ?? "");
  const [filmeId, setFilmeId] = useState(editando?.filme.id ?? "");

  useEffect(() => {
    if (editando) {
      setCodigo(editando.codigo);
      setFilmeId(editando.filme.id);
    } else {
      setCodigo("");
      setFilmeId("");
    }
  }, [editando]);

  function handleSalvar() {
    if (!codigo.trim() || !filmeId) return;

    const filmeSelecionado = filmes.find((f) => f.id === Number(filmeId));
    if (!filmeSelecionado) return;

    if (editando) {
      setData(
        data.map((c) =>
          c.id === editando.id
            ? { ...c, codigo, filme: filmeSelecionado }
            : c
        )
      );
      setEditando(null);
    } else {
      const novoId = Math.max(...data.map((c) => c.id), 0) + 1;
      setData([
        ...data,
        {
          id: novoId,
          codigo,
          filme: filmeSelecionado,
          alugado: false, // Sempre começa como não alugado
        },
      ]);
    }

    setCodigo("");
    setFilmeId("");
  }

  function handleCancelar() {
    setEditando(null);
    setCodigo("");
    setFilmeId("");
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
          label="Código"
          variant="outlined"
          fullWidth
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          sx={{ bgcolor: "white" }}
        />

        <FormControl fullWidth>
          <InputLabel>Filme</InputLabel>
          <Select
            value={filmeId}
            label="Filme"
            onChange={(e) => setFilmeId(e.target.value)}
            sx={{ bgcolor: "white" }}
          >
            {filmes.map((filme) => (
              <MenuItem key={filme.id} value={filme.id}>
                {filme.titulo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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