import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  mySubscription : Subscription;
  sports;
  searchTerm:string;
  p = 1;
  constructor(private gds : GamesdataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getSports().subscribe(
      sData => {
            this.sports = sData;
      },
      err => {
        console.log('err in getting sports games', err);
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/action/'+id)
  }
}
