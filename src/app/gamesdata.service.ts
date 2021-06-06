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

  // get card method
  getCard():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "card"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }
  
  // get fantasy method
  getFantasy():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "fantasy"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }
  
  // get fighting method
  getFighting():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "fighting"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }

  // get MMORPG method
  getMMORPG():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "MMORPG"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }

  // get MMO method
  getMMO():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "MMO"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }

  // get MOBA method
  getMOBA():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "MOBA"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }

  // get Social method
  getSocial():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "Social"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }

  // get Sports method
  getSports():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "Sports"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }

  // get Racing method
  getRacing():Observable<games[]>{

    //header
    const header = {
      "x-rapidapi-key": "99dc90849dmshdad9f0cfcb288c4p1d9fc0jsn9ca48c93183a",
	    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }

    //params
    const params = {
      "category": "Racing"
    }
    return this.hc.get<games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: header,
      params:params
    });
  }


  getGameById(id):Observable<games>
  {

    let ID=id.toString()
    return this.hc.get<games>("https://free-to-play-games-database.p.rapidapi.com/api/game?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }


}
