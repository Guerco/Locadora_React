import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import MovieIcon from "@mui/icons-material/Movie";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import GerenciarGeneros from "./pages/Genero/GerenciarGeneros";
import GerenciarDiretores from "./pages/Diretor/GerenciarDiretores";
import GerenciarClientes from "./pages/Cliente/GerenciarClientes";
import GerenciarFilmes from "./pages/Filme/GerenciarFilmes";
import DetalheFilme from "./pages/Filme/DetalheFilme";
import GerenciarCopias from "./pages/Copia/GerenciarCopias";
import GerenciarAlugueis from "./pages/Aluguel/GerenciarAlugueis";
import DetalheCliente from './pages/Cliente/DetalheCliente';

import "./App.css";

const drawerWidth = 240;

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <LocalMoviesIcon sx={{ mr: 2, fontSize: 32 }} />
            <Typography variant="h6" noWrap component="div">
              Locadora
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/filmes">
                  <ListItemIcon>
                    <MovieIcon />
                  </ListItemIcon>
                  <ListItemText primary="Filmes" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/generos">
                  <ListItemIcon>
                    <MenuBookIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gêneros" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/diretores">
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Diretores" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/clientes">
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Clientes" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/copias">
                  <ListItemIcon>
                    <ContentCopyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cópias" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton 
                  component={Link} 
                  to="/alugueis"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: "white",
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                    borderRadius: 1,
                    mx: 1,
                    my: 0.5,
                  }}
                >
                  <ListItemIcon>
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary="Alugar" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Container>
            <Routes>
              <Route path="/" element={<GerenciarFilmes />} />
              <Route path="/filmes" element={<GerenciarFilmes />} />
              <Route path="/filmes/:id" element={<DetalheFilme />} />
              <Route path="/generos" element={<GerenciarGeneros />} />
              <Route path="/diretores" element={<GerenciarDiretores />} />
              <Route path="/clientes" element={<GerenciarClientes />} />
              <Route path="/clientes/:id" element={<DetalheCliente />} />
              <Route path="/copias" element={<GerenciarCopias />} />
              <Route path="/alugueis" element={<GerenciarAlugueis />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;