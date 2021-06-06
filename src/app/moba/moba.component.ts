import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moba',
  templateUrl: './moba.component.html',
  styleUrls: ['./moba.component.css']
})
export class MobaComponent implements OnInit {

  mySubscription : Subscription;
  moba;
  searchTerm:string;
  p = 1;
  constructor(private gds : GamesdataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getMOBA().subscribe(
      mData => {
            this.moba = mData;
      },
      err => {
        console.log('err in getting moba games', err);
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/action/'+id)
  }

}
