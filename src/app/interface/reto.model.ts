import { NormaModel } from './norma.model';

export interface RetoModel {
    id?: string;
    name: string;
    dateStart: string;
    dateEnd: string;
    activo: boolean;
    normas?: NormaModel[];
}