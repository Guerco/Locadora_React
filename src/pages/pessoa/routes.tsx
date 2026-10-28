import { Routes, Route } from "react-router-dom";
import { ListaPessoas } from "./pages/ListaPessoas";
import { DetalhePessoa } from "./pages/DetalhePessoa";
import { CadastraPessoa } from "./pages/CadastraPessoa";

export function PessoasRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ListaPessoas />} />
            <Route path=":id" element={<DetalhePessoa />} />
            <Route path="cadastra" element={<CadastraPessoa />} />
        </Routes>
    )

}

