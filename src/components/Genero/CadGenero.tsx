import { useState } from "react";
import { Container, TextField, Button, Paper, Box } from "@mui/material";
import type { Genero } from "../../types/Genero";

type Props = {
  data: Genero[];
  setData: React.Dispatch<React.SetStateAction<Genero[]>>;
  editando: Genero | null;
  setEditando: React.Dispatch<React.SetStateAction<Genero | null>>;
};

export default function CadGenero({
  data,
  setData,
  editando,
  setEditando,
}: Props) {
  const [descricao, setDescricao] = useState(editando?.descricao ?? "");

  //   useEffect(() => {
  //     setDescricao(editando?.descricao ?? "");
  //   }, [editando]);

  function handleSalvar() {
    if (!descricao.trim()) return;

    if (editando) {
      setData(
        data.map((g) => (g.id === editando.id ? { ...g, descricao } : g)),
      );
      setEditando(null);
    } else {
      const novoId = Math.max(...data.map((g) => g.id)) + 1;
      setData([...data, { id: novoId, descricao }]);
    }

    setDescricao("");
  }

  function handleCancelar() {
    setEditando(null);
    setDescricao("");
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
          label="Descrição"
          variant="outlined"
          fullWidth
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
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
