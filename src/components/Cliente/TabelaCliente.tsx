import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { Cliente } from "../../types/Cliente";

type Props = {
  data: Cliente[];
  onEdit: (cliente: Cliente) => void;
  onDelete: (id: number) => void;
  onView: (cliente: Cliente) => void;
};

export default function TabelaCliente({ data, onEdit, onDelete, onView }: Props) {
  function handleDoubleClick(cliente: Cliente) {
    onEdit(cliente);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell width={100} align="center">Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((cliente) => (
            <TableRow
              key={cliente.id}
              onDoubleClick={() => handleDoubleClick(cliente)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{cliente.id}</TableCell>
              <TableCell>{cliente.nome}</TableCell>
              <TableCell width={100} align="center">
                <Tooltip title="Visualizar">
                  <IconButton
                    size="small"
                    color="info"
                    onClick={(e) => {
                      e.stopPropagation();
                      onView(cliente);
                    }}
                  >
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Excluir">
                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(cliente.id);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}