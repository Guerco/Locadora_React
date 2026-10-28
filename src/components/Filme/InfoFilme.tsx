import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import type { Filme } from "../../types/Filme";
import type { Copia } from "../../types/Copia";
import TabelaCopiaSimples from "./TabelaCopiaSimples";

type Props = {
  filme: Filme;
  copias: Copia[];
  onAlugar: (copia: Copia) => void;
};

export default function InfoFilme({ filme, copias, onAlugar }: Props) {
  // Filtrar apenas as cópias deste filme
  const copiasDoFilme = copias.filter((copia) => copia.filme.id === filme.id);

  return (
    <Card sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          {filme.titulo}
        </Typography>
        
        <Divider sx={{ mb: 2 }} />
        
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
          <Typography variant="body1">
            <strong>ID:</strong> {filme.id}
          </Typography>
          
          <Typography variant="body1">
            <strong>Título:</strong> {filme.titulo}
          </Typography>
          
          <Typography variant="body1">
            <strong>Gênero:</strong> {filme.genero.descricao}
          </Typography>
          
          <Typography variant="body1">
            <strong>Diretor:</strong> {filme.diretor.nome}
          </Typography>
          
          <Typography variant="body1">
            <strong>Nacionalidade do Diretor:</strong> {filme.diretor.nacionalidade}
          </Typography>
        </Box>

        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          Cópias Disponíveis
        </Typography>
        
        <TabelaCopiaSimples data={copiasDoFilme} onAlugar={onAlugar} />
      </CardContent>
    </Card>
  );
}