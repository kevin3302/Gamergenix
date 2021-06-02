import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { games } from './models/games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesdataService {

  // Inject Http Client Object 
  constructor(private hc: HttpClient) { }

  // get action method
  getAction():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "action"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }
  
  //get strategy method
  getStrategy():Observable<games[]>{

    // substitute params 
    const params = {
      "category": "Strategy"
    }

    return this.hc.get<games[]>( "https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers:{
        "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
      },
      params:params
    });
  }

  // get shooter method
  getShooter():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "shooter"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }


}
