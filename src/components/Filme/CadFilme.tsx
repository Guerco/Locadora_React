import { useState, useEffect } from "react";
import { Container, TextField, Button, Paper, Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import type { Filme } from "../../types/Filme";
import type { Genero } from "../../types/Genero";
import type { Diretor } from "../../types/Diretor";

type Props = {
  data: Filme[];
  setData: React.Dispatch<React.SetStateAction<Filme[]>>;
  editando: Filme | null;
  setEditando: React.Dispatch<React.SetStateAction<Filme | null>>;
  generos: Genero[];
  diretores: Diretor[];
};

export default function CadFilme({
  data,
  setData,
  editando,
  setEditando,
  generos,
  diretores,
}: Props) {
  const [titulo, setTitulo] = useState(editando?.titulo ?? "");
  const [generoId, setGeneroId] = useState(editando?.genero.id ?? "");
  const [diretorId, setDiretorId] = useState(editando?.diretor.id ?? "");

  useEffect(() => {
    if (editando) {
      setTitulo(editando.titulo);
      setGeneroId(editando.genero.id);
      setDiretorId(editando.diretor.id);
    } else {
      setTitulo("");
      setGeneroId("");
      setDiretorId("");
    }
  }, [editando]);

  function handleSalvar() {
    if (!titulo.trim() || !generoId || !diretorId) return;

    const generoSelecionado = generos.find(g => g.id === Number(generoId));
    const diretorSelecionado = diretores.find(d => d.id === Number(diretorId));

    if (!generoSelecionado || !diretorSelecionado) return;

    if (editando) {
      setData(
        data.map((f) => (f.id === editando.id 
          ? { ...f, titulo, genero: generoSelecionado, diretor: diretorSelecionado } 
          : f)),
      );
      setEditando(null);
    } else {
      const novoId = Math.max(...data.map((f) => f.id), 0) + 1;
      setData([...data, { 
        id: novoId, 
        titulo, 
        genero: generoSelecionado, 
        diretor: diretorSelecionado 
      }]);
    }

    setTitulo("");
    setGeneroId("");
    setDiretorId("");
  }

  function handleCancelar() {
    setEditando(null);
    setTitulo("");
    setGeneroId("");
    setDiretorId("");
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
          label="Título"
          variant="outlined"
          fullWidth
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <FormControl fullWidth>
  <InputLabel>Gênero</InputLabel>
  <Select
    value={generoId}
    label="Gênero"
    onChange={(e) => setGeneroId(e.target.value)}
    sx={{ bgcolor: 'white' }}
  >
    {generos.map((genero) => (
      <MenuItem key={genero.id} value={genero.id}>
        {genero.descricao}
      </MenuItem>
    ))}
  </Select>
</FormControl>

<FormControl fullWidth>
  <InputLabel>Diretor</InputLabel>
  <Select
    value={diretorId}
    label="Diretor"
    onChange={(e) => setDiretorId(e.target.value)}
    sx={{ bgcolor: 'white' }}
  >
    {diretores.map((diretor) => (
      <MenuItem key={diretor.id} value={diretor.id}>
        {diretor.nome}
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