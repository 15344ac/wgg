import { DataHora } from './dataHora';

export class Periode {
    id: number;
    dataInici: DataHora;
    dataFi: DataHora;
    titol: string;
    descripcio: string;
    fills: Periode[];
}
