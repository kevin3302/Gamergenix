import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fighting',
  templateUrl: './fighting.component.html',
  styleUrls: ['./fighting.component.css']
})
export class FightingComponent implements OnInit {

  mySubscription : Subscription;
  fighting;
  searchTerm:string;
  p = 1;
  constructor(private gds : GamesdataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getFighting().subscribe(
      fData => {
            this.fighting = fData;
      },
      err => {
        console.log('err in getting fighting games', err);
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/action/'+id)
  }

}
