import type { Cliente } from "./Cliente";
import type { Copia } from "./Copia";

export type Aluguel = {
    id: number;
    dataAluguel: Date;
    dataDevolucao?: Date;
    copia: Copia;
    cliente: Cliente;
}