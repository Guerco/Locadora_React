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
import type { Diretor } from "../../types/Diretor";

type Props = {
  data: Diretor[];
  onEdit: (diretor: Diretor) => void;
  onDelete: (id: number) => void;
};

export default function TabelaDiretor({ data, onEdit, onDelete }: Props) {
  function handleDoubleClick(diretor: Diretor) {
    onEdit(diretor);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Nacionalidade</TableCell>
            <TableCell width={50} />
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((diretor) => (
            <TableRow
              key={diretor.id}
              onDoubleClick={() => handleDoubleClick(diretor)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{diretor.id}</TableCell>
              <TableCell>{diretor.nome}</TableCell>
              <TableCell>{diretor.nacionalidade}</TableCell>
              <TableCell width={50}>
                <Tooltip title="Excluir">
                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(diretor.id);
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