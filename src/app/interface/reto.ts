import { NormaModel } from './norma.model';

export interface Reto {
    id?: string;
    name: string;
    dateStart: string;
    dateEnd: string;
    activo: boolean;
    normas?: NormaModel[];
}