// import { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TableSortLabel,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import type { Genero } from "../../types/Genero";

// type Order = "asc" | "desc";

// type Props = {
//   data: Genero[];
//   onEdit: (genero: Genero) => void;
//   onDelete: (id: number) => void;
// };

// export default function TabelaGenero({ data, onEdit, onDelete }: Props) {
//   const [order, setOrder] = useState<Order>("asc");
//   const [orderBy, setOrderBy] = useState<keyof Genero>("id");
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   function handleSort(column: keyof Genero) {
//     const isAsc = orderBy === column && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(column);
//   }

//   function handleDoubleClick(genero: Genero) {
//     setSelectedId(genero.id);
//     onEdit(genero);
//   }

//   function sortData(data: Genero[]) {
//     return [...data].sort((a, b) => {
//       if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
//       if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
//       return 0;
//     });
//   }

//   const sortedDados = sortData(data);

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>
//               <TableSortLabel
//                 active={orderBy === "id"}
//                 direction={orderBy === "id" ? order : "asc"}
//                 onClick={() => handleSort("id")}
//               >
//                 ID
//               </TableSortLabel>
//             </TableCell>

//             <TableCell>
//               <TableSortLabel
//                 active={orderBy === "descricao"}
//                 direction={orderBy === "descricao" ? order : "asc"}
//                 onClick={() => handleSort("descricao")}
//               >
//                 Descrição
//               </TableSortLabel>
//             </TableCell>

//             <TableCell width={50} />
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {sortedDados.map((genero) => (
//             <TableRow
//               key={genero.id}
//               onDoubleClick={() => handleDoubleClick(genero)}
//               selected={selectedId === genero.id}
//               sx={{ cursor: "pointer" }}
//             >
//               <TableCell>{genero.id}</TableCell>
//               <TableCell>{genero.descricao}</TableCell>
//               <TableCell width={50}>
//                 <Tooltip title="Excluir">
//                   <IconButton
//                     size="small"
//                     color="error"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       onDelete(genero.id);
//                     }}
//                   >
//                     <DeleteIcon fontSize="small" />
//                   </IconButton>
//                 </Tooltip>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

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
import type { Genero } from "../../types/Genero";

type Props = {
  data: Genero[];
  onEdit: (genero: Genero) => void;
  onDelete: (id: number) => void;
};

export default function TabelaGenero({ data, onEdit, onDelete }: Props) {
  function handleDoubleClick(genero: Genero) {
    onEdit(genero);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell width={50} />
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((genero) => (
            <TableRow
              key={genero.id}
              onDoubleClick={() => handleDoubleClick(genero)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{genero.id}</TableCell>
              <TableCell>{genero.descricao}</TableCell>
              <TableCell width={50}>
                <Tooltip title="Excluir">
                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(genero.id);
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