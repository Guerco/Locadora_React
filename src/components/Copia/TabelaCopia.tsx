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
import type { Copia } from "../../types/Copia";

type Props = {
  data: Copia[];
  onEdit: (copia: Copia) => void;
  onDelete: (id: number) => void;
};

export default function TabelaCopia({ data, onEdit, onDelete }: Props) {
  function handleDoubleClick(copia: Copia) {
    onEdit(copia);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Filme</TableCell>
            <TableCell>Alugado</TableCell>
            <TableCell width={50}>Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((copia) => (
            <TableRow
              key={copia.id}
              onDoubleClick={() => handleDoubleClick(copia)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{copia.codigo}</TableCell>
              <TableCell>{copia.filme.titulo}</TableCell>
              <TableCell>{copia.alugado ? "Sim" : "Não"}</TableCell>
              <TableCell width={50}>
                <Tooltip title="Excluir">
                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(copia.id);
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