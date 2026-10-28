import { TabelaPessoas } from "../components/TabelaPessoas";

export function CadastraPessoa() {
  const pessoas = [
    { id: 1, nome: "João", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 }
  ];

  return (
    <>
      <h1>Pessoas</h1>
      <TabelaPessoas pessoas={pessoas} />
    </>
  );
}