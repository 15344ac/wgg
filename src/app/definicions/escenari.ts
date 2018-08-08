import { Periode } from './periode';
import { DataHora } from './dataHora';

export class Escenari {
    periodes: Periode[] = new Array<Periode>();
    descripcio = '';
    comentari = '';
    coincideix = false;
    nota = '';
    dataInici: DataHora = undefined;
    dataFi: DataHora = undefined;
    cadenaDataInici: string;
    cadenaDataFi: string;
}
