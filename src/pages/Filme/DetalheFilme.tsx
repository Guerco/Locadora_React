import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoFilme from "../../components/Filme/InfoFilme";
import type { Filme } from "../../types/Filme";
import type { Genero } from "../../types/Genero";
import type { Diretor } from "../../types/Diretor";
import type { Copia } from "../../types/Copia";

// Dados de gêneros
const generos: Genero[] = [
  { id: 1, descricao: "Romance" },
  { id: 2, descricao: "Ficção Científica" },
  { id: 3, descricao: "Fantasia" },
  { id: 4, descricao: "Terror" },
  { id: 5, descricao: "Suspense" },
  { id: 6, descricao: "Thriller" },
  { id: 7, descricao: "Aventura" },
  { id: 8, descricao: "Drama" },
  { id: 9, descricao: "Comédia" },
  { id: 10, descricao: "Policial" },
  { id: 11, descricao: "Biografia" },
  { id: 12, descricao: "História" },
  { id: 13, descricao: "Infantil" },
  { id: 14, descricao: "Animação" },
];

// Dados de diretores
const diretores: Diretor[] = [
  { id: 1, nome: "Steven Spielberg", nacionalidade: "Estados Unidos" },
  { id: 2, nome: "Christopher Nolan", nacionalidade: "Reino Unido" },
  { id: 3, nome: "Quentin Tarantino", nacionalidade: "Estados Unidos" },
  { id: 4, nome: "Martin Scorsese", nacionalidade: "Estados Unidos" },
  { id: 5, nome: "Alfred Hitchcock", nacionalidade: "Reino Unido" },
  { id: 6, nome: "Akira Kurosawa", nacionalidade: "Japão" },
  { id: 7, nome: "Francis Ford Coppola", nacionalidade: "Estados Unidos" },
  { id: 8, nome: "David Fincher", nacionalidade: "Estados Unidos" },
  { id: 9, nome: "Pedro Almodóvar", nacionalidade: "Espanha" },
  { id: 10, nome: "Federico Fellini", nacionalidade: "Itália" },
  { id: 11, nome: "James Cameron", nacionalidade: "Canadá" },
  { id: 12, nome: "Peter Jackson", nacionalidade: "Nova Zelândia" },
  { id: 13, nome: "Hayao Miyazaki", nacionalidade: "Japão" },
  { id: 14, nome: "Glauber Rocha", nacionalidade: "Brasil" },
];

// Dados de filmes
const filmes: Filme[] = [
  { id: 1, titulo: "Jurassic Park", genero: generos[6], diretor: diretores[0] },
  { id: 2, titulo: "Inception", genero: generos[1], diretor: diretores[1] },
  { id: 3, titulo: "Pulp Fiction", genero: generos[8], diretor: diretores[2] },
  { id: 4, titulo: "Taxi Driver", genero: generos[7], diretor: diretores[3] },
  { id: 5, titulo: "Psycho", genero: generos[4], diretor: diretores[4] },
  { id: 6, titulo: "Seven Samurai", genero: generos[6], diretor: diretores[5] },
  { id: 7, titulo: "The Godfather", genero: generos[7], diretor: diretores[6] },
  { id: 8, titulo: "Fight Club", genero: generos[7], diretor: diretores[7] },
  { id: 9, titulo: "Volver", genero: generos[7], diretor: diretores[8] },
  { id: 10, titulo: "La Dolce Vita", genero: generos[7], diretor: diretores[9] },
  { id: 11, titulo: "Avatar", genero: generos[1], diretor: diretores[10] },
  { id: 12, titulo: "The Lord of the Rings", genero: generos[2], diretor: diretores[11] },
  { id: 13, titulo: "Spirited Away", genero: generos[13], diretor: diretores[12] },
  { id: 14, titulo: "Black God, White Devil", genero: generos[7], diretor: diretores[13] },
];

// Dados de cópias
const copias: Copia[] = [
  { id: 1, codigo: "COP001", alugado: true, filme: filmes[0] },
  { id: 2, codigo: "COP002", alugado: false, filme: filmes[0] },
  { id: 3, codigo: "COP003", alugado: true, filme: filmes[1] },
  { id: 4, codigo: "COP004", alugado: false, filme: filmes[2] },
  { id: 5, codigo: "COP005", alugado: true, filme: filmes[3] },
  { id: 6, codigo: "COP006", alugado: false, filme: filmes[4] },
  { id: 7, codigo: "COP007", alugado: false, filme: filmes[5] },
  { id: 8, codigo: "COP008", alugado: true, filme: filmes[6] },
  { id: 9, codigo: "COP009", alugado: false, filme: filmes[7] },
  { id: 10, codigo: "COP010", alugado: false, filme: filmes[8] },
  { id: 11, codigo: "COP011", alugado: false, filme: filmes[0] },
  { id: 12, codigo: "COP012", alugado: true, filme: filmes[1] },
];

export default function DetalheFilme() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const filme = filmes.find(f => f.id === Number(id));

  function handleVoltar() {
    navigate("/filmes");
  }

  function handleAlugar(copia: Copia) {
    // Navegar para a página de aluguel passando o ID da cópia via state
    navigate("/alugueis", { state: { copiaId: copia.id } });
  }

  if (!filme) {
    return (
      <Container>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h5" color="error" gutterBottom>
            Filme não encontrado!
          </Typography>
          <Button variant="contained" onClick={handleVoltar} startIcon={<ArrowBackIcon />}>
            Voltar para Lista de Filmes
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ mb: 2, mt: 2 }}>
        <Button variant="outlined" onClick={handleVoltar} startIcon={<ArrowBackIcon />}>
          Voltar
        </Button>
      </Box>
      <InfoFilme filme={filme} copias={copias} onAlugar={handleAlugar} />
    </Container>
  );
}