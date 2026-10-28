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
import type { Filme } from "../../types/Filme";

type Props = {
  data: Filme[];
  onEdit: (filme: Filme) => void;
  onDelete: (id: number) => void;
  onView: (filme: Filme) => void;
};

export default function TabelaFilme({ data, onEdit, onDelete, onView }: Props) {
  function handleDoubleClick(filme: Filme) {
    onEdit(filme);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Título</TableCell>
            <TableCell width={100} align="center">Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((filme) => (
            <TableRow
              key={filme.id}
              onDoubleClick={() => handleDoubleClick(filme)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{filme.id}</TableCell>
              <TableCell>{filme.titulo}</TableCell>
              <TableCell width={100} align="center">
                <Tooltip title="Visualizar">
                  <IconButton
                    size="small"
                    color="info"
                    onClick={(e) => {
                      e.stopPropagation();
                      onView(filme);
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
                      onDelete(filme.id);
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