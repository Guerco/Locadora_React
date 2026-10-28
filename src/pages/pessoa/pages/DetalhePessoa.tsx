import { useParams, Link } from "react-router-dom";
import type { Pessoa } from "../../../types/Pessoa";
import { pessoasTest } from "../types/pessoas-test";


export function DetalhePessoa() {
  const { id } = useParams();

  const pessoas: Pessoa[] = pessoasTest;

  const pessoa = pessoas.find(p => p.id === Number(id));

  if (!pessoa) {
    return <h2>Pessoa não encontrada</h2>;
  }

  return (
    <div>
      <h1>Detalhe da Pessoa</h1>

      <p><strong>ID:</strong> {pessoa.id}</p>
      <p><strong>Nome:</strong> {pessoa.nome}</p>
      <p><strong>Idade:</strong> {pessoa.idade}</p>
      <p><strong>E-mail:</strong> {pessoa.email || "E-mail não informado"}</p>
      <Link to="/pessoas">Voltar</Link>
    </div>
  );
}