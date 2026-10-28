import { useState } from "react";
import { Container, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Cliente } from "../../types/Cliente";

import CadCliente from "../../components/Cliente/CadCliente";
import TabelaCliente from "../../components/Cliente/TabelaCliente";

const dados: Cliente[] = [
  { id: 1, nome: "João Silva", cpf: "123.456.789-00", nascimento: new Date("1990-05-15") },
  { id: 2, nome: "Maria Oliveira", cpf: "987.654.321-00", nascimento: new Date("1985-08-22") },
  { id: 3, nome: "Pedro Santos", cpf: "456.789.123-00", nascimento: new Date("1995-03-10") },
  { id: 4, nome: "Ana Souza", cpf: "321.654.987-00", nascimento: new Date("1988-11-30") },
  { id: 5, nome: "Carlos Ferreira", cpf: "789.123.456-00", nascimento: new Date("1992-07-18") },
];

export default function GerenciarClientes() {
  const navigate = useNavigate();
  const [listaClientes, setListaClientes] = useState<Cliente[]>(dados);
  const [editando, setEditando] = useState<Cliente | null>(null);

  function handleView(cliente: Cliente) {
    navigate(`/clientes/${cliente.id}`);
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Gerenciar Clientes
      </Typography>

      <CadCliente
        key={editando?.id ?? "novo"}
        data={listaClientes}
        setData={setListaClientes}
        editando={editando}
        setEditando={setEditando}
      />

      <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
        Dê um duplo clique em qualquer registro para editá-lo
      </Alert>

      <TabelaCliente
        data={listaClientes}
        onEdit={setEditando}
        onDelete={(id) =>
          setListaClientes(listaClientes.filter((c) => c.id !== id))
        }
        onView={handleView}
      />
    </Container>
  );
}