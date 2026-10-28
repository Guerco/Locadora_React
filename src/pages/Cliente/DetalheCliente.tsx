import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoCliente from "../../components/Cliente/InfoCliente";
import type { Cliente } from "../../types/Cliente";

// Dados de clientes (mesmos do GerenciarClientes)
const clientes: Cliente[] = [
  { id: 1, nome: "João Silva", cpf: "123.456.789-00", nascimento: new Date("1990-05-15") },
  { id: 2, nome: "Maria Oliveira", cpf: "987.654.321-00", nascimento: new Date("1985-08-22") },
  { id: 3, nome: "Pedro Santos", cpf: "456.789.123-00", nascimento: new Date("1995-03-10") },
  { id: 4, nome: "Ana Souza", cpf: "321.654.987-00", nascimento: new Date("1988-11-30") },
  { id: 5, nome: "Carlos Ferreira", cpf: "789.123.456-00", nascimento: new Date("1992-07-18") },
];

export default function DetalheCliente() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const cliente = clientes.find(c => c.id === Number(id));

  function handleVoltar() {
    navigate("/clientes");
  }

  if (!cliente) {
    return (
      <Container>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h5" color="error" gutterBottom>
            Cliente não encontrado!
          </Typography>
          <Button variant="contained" onClick={handleVoltar} startIcon={<ArrowBackIcon />}>
            Voltar para Lista de Clientes
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ mb: 2, mt: 2 }}>
        <Button variant="outlined" onClick={handleVoltar} startIcon={<ArrowBackIcon />}>
          Voltar
        </Button>
      </Box>
      <InfoCliente cliente={cliente} />
    </Container>
  );
}