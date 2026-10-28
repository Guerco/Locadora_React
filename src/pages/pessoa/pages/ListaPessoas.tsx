import { TabelaPessoas } from "../components/TabelaPessoas";
import { pessoasTest } from "../types/pessoas-test";

export function ListaPessoas() {
  const pessoas = pessoasTest;

  return (
    <>
      <h1>Pessoas</h1>
      <TabelaPessoas pessoas={pessoas} />
    </>
  );
}