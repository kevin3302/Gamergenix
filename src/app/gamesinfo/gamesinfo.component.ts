import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesdataService } from '../gamesdata.service';
import { games } from '../models/games.model';

@Component({
  selector: 'app-gamesinfo',
  templateUrl: './gamesinfo.component.html',
  styleUrls: ['./gamesinfo.component.css']
})
export class GamesinfoComponent implements OnInit {

  game:games;
  searchTerm:string;
  p=1;

  //injecting gamesdata service object
  constructor(private ar:ActivatedRoute, private fs:GamesdataService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of game with current id
    this.fs.getGameById(id).subscribe(
      obj=>
      {
        //assigning games
        this.game = obj;
        console.log(this.game)
      },
      err=>
      {
        console.log("error in getting details of game is:", err);
      }
    )
  } 

}
