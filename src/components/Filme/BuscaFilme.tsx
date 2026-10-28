import { useState } from "react";
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
  TextField,
  Box,
  InputAdornment,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import type { Filme } from "../../types/Filme";

type Props = {
  data: Filme[];
  onEdit: (filme: Filme) => void;
  onDelete: (id: number) => void;
  onView: (filme: Filme) => void;
};

export default function BuscaFilme({ data, onEdit, onDelete, onView }: Props) {
  const [busca, setBusca] = useState("");

  function handleDoubleClick(filme: Filme) {
    onEdit(filme);
  }

  function handleLimparBusca() {
    setBusca("");
  }

  // Filtrar filmes pelo título
  const filmesFiltrados = data.filter((filme) =>
    filme.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar filme por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: busca && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={handleLimparBusca}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: "white" }}
        />
      </Box>

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
            {filmesFiltrados.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Nenhum filme encontrado
                </TableCell>
              </TableRow>
            ) : (
              filmesFiltrados.map((filme) => (
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
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}