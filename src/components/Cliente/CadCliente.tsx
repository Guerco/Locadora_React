import { useState } from "react";
import { Container, TextField, Button, Paper, Box } from "@mui/material";
import type { Cliente } from "../../types/Cliente";

type Props = {
  data: Cliente[];
  setData: React.Dispatch<React.SetStateAction<Cliente[]>>;
  editando: Cliente | null;
  setEditando: React.Dispatch<React.SetStateAction<Cliente | null>>;
};

export default function CadCliente({
  data,
  setData,
  editando,
  setEditando,
}: Props) {
  const [nome, setNome] = useState(editando?.nome ?? "");
  const [cpf, setCpf] = useState(editando?.cpf ?? "");
  const [nascimento, setNascimento] = useState(
    editando?.nascimento ? editando.nascimento.toISOString().split('T')[0] : ""
  );

  function handleSalvar() {
    if (!nome.trim() || !cpf.trim() || !nascimento) return;

    if (editando) {
      setData(
        data.map((c) => (c.id === editando.id 
          ? { ...c, nome, cpf, nascimento: new Date(nascimento) } 
          : c)),
      );
      setEditando(null);
    } else {
      const novoId = Math.max(...data.map((c) => c.id), 0) + 1;
      setData([...data, { id: novoId, nome, cpf, nascimento: new Date(nascimento) }]);
    }

    setNome("");
    setCpf("");
    setNascimento("");
  }

  function handleCancelar() {
    setEditando(null);
    setNome("");
    setCpf("");
    setNascimento("");
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
          label="CPF"
          variant="outlined"
          fullWidth
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <TextField
          component={Paper}
          label="Data de Nascimento"
          variant="outlined"
          fullWidth
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
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