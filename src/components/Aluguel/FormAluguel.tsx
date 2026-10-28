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
  Alert,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import type { Aluguel } from "../../types/Aluguel";
import type { Cliente } from "../../types/Cliente";
import type { Copia } from "../../types/Copia";

type Props = {
  data: Aluguel[];
  setData: React.Dispatch<React.SetStateAction<Aluguel[]>>;
  clientes: Cliente[];
  copias: Copia[];
  setCopias: React.Dispatch<React.SetStateAction<Copia[]>>;
};

export default function FormAluguel({ data, setData, clientes, copias, setCopias }: Props) {
  const location = useLocation();
  const [clienteId, setClienteId] = useState("");
  const [copiaId, setCopiaId] = useState("");
  const [dataAluguel, setDataAluguel] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [mensagem, setMensagem] = useState<{ tipo: "success" | "error"; texto: string } | null>(null);

  // Verificar se veio uma cópia pré-selecionada via state
  useEffect(() => {
    if (location.state && (location.state as any).copiaId) {
      const copiaIdFromState = (location.state as any).copiaId;
      setCopiaId(String(copiaIdFromState));
    }
  }, [location]);

  function handleSalvar() {
    if (!clienteId || !copiaId || !dataAluguel) {
      setMensagem({ tipo: "error", texto: "Preencha todos os campos!" });
      return;
    }

    const clienteSelecionado = clientes.find((c) => c.id === Number(clienteId));
    const copiaSelecionada = copias.find((c) => c.id === Number(copiaId));

    if (!clienteSelecionado || !copiaSelecionada) {
      setMensagem({ tipo: "error", texto: "Cliente ou Cópia não encontrados!" });
      return;
    }

    // Verificar se a cópia já está alugada
    const copiaAlugada = data.some(
      (aluguel) => aluguel.copia.id === copiaSelecionada.id && !aluguel.dataDevolucao
    );

    if (copiaAlugada) {
      setMensagem({ tipo: "error", texto: "Esta cópia já está alugada!" });
      return;
    }

    const novoId = Math.max(...data.map((a) => a.id), 0) + 1;
    const novoAluguel: Aluguel = {
      id: novoId,
      dataAluguel: new Date(dataAluguel),
      copia: copiaSelecionada,
      cliente: clienteSelecionado,
    };

    setData([...data, novoAluguel]);
    
    // Atualizar o status da cópia para alugado
    setCopias(
      copias.map((copia) =>
        copia.id === copiaSelecionada.id
          ? { ...copia, alugado: true }
          : copia
      )
    );

    setMensagem({ tipo: "success", texto: "Aluguel realizado com sucesso!" });
    
    // Limpar formulário
    setClienteId("");
    setCopiaId("");
    setDataAluguel(new Date().toISOString().split("T")[0]);

    // Limpar mensagem após 3 segundos
    setTimeout(() => setMensagem(null), 3000);
  }

  // Filtrar apenas cópias disponíveis (não alugadas)
  const copiasDisponiveis = copias.filter((copia) => !copia.alugado);

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
        {mensagem && (
          <Alert severity={mensagem.tipo} onClose={() => setMensagem(null)}>
            {mensagem.texto}
          </Alert>
        )}

        <FormControl fullWidth>
          <InputLabel>Cliente</InputLabel>
          <Select
            value={clienteId}
            label="Cliente"
            onChange={(e) => setClienteId(e.target.value)}
            sx={{ bgcolor: "white" }}
          >
            {clientes.map((cliente) => (
              <MenuItem key={cliente.id} value={cliente.id}>
                {cliente.nome} - CPF: {cliente.cpf}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Cópia</InputLabel>
          <Select
            value={copiaId}
            label="Cópia"
            onChange={(e) => setCopiaId(e.target.value)}
            sx={{ bgcolor: "white" }}
          >
            {copiasDisponiveis.length === 0 ? (
              <MenuItem disabled>Nenhuma cópia disponível</MenuItem>
            ) : (
              copiasDisponiveis.map((copia) => (
                <MenuItem key={copia.id} value={copia.id}>
                  {copia.codigo} - {copia.filme.titulo}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>

        <TextField
          component={Paper}
          label="Data do Aluguel"
          type="date"
          variant="outlined"
          fullWidth
          value={dataAluguel}
          onChange={(e) => setDataAluguel(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ bgcolor: "white" }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleSalvar}
          disabled={copiasDisponiveis.length === 0}
        >
          Realizar Aluguel
        </Button>
      </Box>
    </Container>
  );
}