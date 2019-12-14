import { Athlete } from './athlete';

export interface Actividad {

    name: string;
    athlete: Athlete [];
    distance: number;
    total_elevation_gain: number;
    type: string;
    start_date: string;
    moving_time: number;


}
