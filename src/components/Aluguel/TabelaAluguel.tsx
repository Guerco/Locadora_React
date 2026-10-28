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
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplyIcon from "@mui/icons-material/Reply";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import type { Aluguel } from "../../types/Aluguel";

type Props = {
  data: Aluguel[];
  onDelete: (id: number) => void;
  onDevolver: (id: number) => void;
};

export default function TabelaAluguel({ data, onDelete, onDevolver }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Código Cópia</TableCell>
            <TableCell>Filme</TableCell>
            <TableCell>Data do Aluguel</TableCell>
            <TableCell align="center">Devolvido</TableCell>
            <TableCell width={100} align="center">Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((aluguel) => (
            <TableRow key={aluguel.id}>
              <TableCell>{aluguel.copia.codigo}</TableCell>
              <TableCell>{aluguel.copia.filme.titulo}</TableCell>
              <TableCell>
                {aluguel.dataAluguel.toLocaleDateString("pt-BR")}
              </TableCell>
              <TableCell align="center">
                {aluguel.dataDevolucao ? (
                  <Tooltip title="Devolvido">
                    <CheckCircleIcon sx={{ color: "#4caf50", fontSize: 24 }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Não devolvido">
                    <CancelIcon sx={{ color: "#f44336", fontSize: 24 }} />
                  </Tooltip>
                )}
              </TableCell>
              <TableCell width={100} align="center">
                {!aluguel.dataDevolucao && (
                  <Tooltip title="Devolver">
                    <IconButton
                      size="small"
                      color="success"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDevolver(aluguel.id);
                      }}
                    >
                      <ReplyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
                <Tooltip title="Excluir">
                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(aluguel.id);
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