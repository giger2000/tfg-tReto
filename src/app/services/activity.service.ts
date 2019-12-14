import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

// const API = 'https//orangevalleycaa.org/api/videos';

export class ActivityService {


  constructor( private http: HttpClient) { }

  // Recupera los datos de un JSON local
  //: Observable<Group[]>
  getData() {
    return this.http.get('assets/data/activities.json');
    // .pipe(
    //   map((data: any) => {
    //     return data.schedule[0].groups;
    //   })
    // );
  }


  getActivity(activityID: string) {

    // return this._httpClient.get(API + '/id/' + activityID);
  
  }
  getAllActivities() {
    // return this._httpClient.get(API);
  }
}
