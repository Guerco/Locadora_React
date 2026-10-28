import type { Pessoa } from "../../../types/Pessoa";
import { LinhaPessoa } from "./LinhaPessoa";
import styles from "./TabelaPessoas.module.css";

type TabelaProps = {
 pessoas: Pessoa[];
};

export function TabelaPessoas({ pessoas }: TabelaProps) {
    return (
        <table border={1}  className={styles.tabela}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {pessoas.map((p) => (
                    <LinhaPessoa key={p.id} pessoa={p} />
                ))}
            </tbody>
        </table>
    );
}
