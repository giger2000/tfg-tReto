// Para las actividades del usuario.
// Son las actividades que puede subir manualmente

export interface PostI {

        titlePost: string;
        contentPost: string;
        imagePost?: any;
        id?: string;
        tagsPost: string;
        fileRef?: string;

        // name: string;
        // athlete: userID;
        // distance: number;
        // total_elevation_gain: number;
        // type: string;
        // start_date: string;
        // moving_time: number;
}
