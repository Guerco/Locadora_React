
import { Link } from "react-router-dom";
import type { Pessoa } from "../../../types/Pessoa";

type Props = {
  pessoa: Pessoa;
};

export function LinhaPessoa({ pessoa }: Props) {
  return (
    <tr>
      <td>{pessoa.nome}</td>
      <td>{pessoa.idade}</td>
      <td><Link to={`/pessoas/${pessoa.id}`}>Ver Detalhe</Link></td>
    </tr>
  );
}