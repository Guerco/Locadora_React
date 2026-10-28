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
import RentalIcon from "@mui/icons-material/Receipt";
import type { Copia } from "../../types/Copia";

type Props = {
  data: Copia[];
  onAlugar: (copia: Copia) => void;
};

export default function TabelaCopiaSimples({ data, onAlugar }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Status</TableCell>
            <TableCell width={50} align="center">Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                Nenhuma cópia disponível para este filme
              </TableCell>
            </TableRow>
          ) : (
            data.map((copia) => (
              <TableRow key={copia.id}>
                <TableCell>{copia.codigo}</TableCell>
                <TableCell>
                  {copia.alugado ? (
                    <span style={{ color: "red" }}>Alugado</span>
                  ) : (
                    <span style={{ color: "green" }}>Disponível</span>
                  )}
                </TableCell>
                <TableCell width={50} align="center">
                  {!copia.alugado && (
                    <Tooltip title="Alugar esta cópia">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => onAlugar(copia)}
                      >
                        <RentalIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}