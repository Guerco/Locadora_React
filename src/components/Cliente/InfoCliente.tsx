import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import type { Cliente } from "../../types/Cliente";

type Props = {
  cliente: Cliente;
};

export default function InfoCliente({ cliente }: Props) {
  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          {cliente.nome}
        </Typography>
        
        <Divider sx={{ mb: 2 }} />
        
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography variant="body1">
            <strong>ID:</strong> {cliente.id}
          </Typography>
          
          <Typography variant="body1">
            <strong>Nome:</strong> {cliente.nome}
          </Typography>
          
          <Typography variant="body1">
            <strong>CPF:</strong> {cliente.cpf}
          </Typography>
          
          <Typography variant="body1">
            <strong>Data de Nascimento:</strong>{" "}
            {cliente.nascimento.toLocaleDateString("pt-BR")}
          </Typography>
          
          <Typography variant="body1">
            <strong>Idade:</strong>{" "}
            {new Date().getFullYear() - cliente.nascimento.getFullYear()} anos
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}