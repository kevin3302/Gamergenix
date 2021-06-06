import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mmorpg',
  templateUrl: './mmorpg.component.html',
  styleUrls: ['./mmorpg.component.css']
})
export class MmorpgComponent implements OnInit {

  mySubscription : Subscription;
  mmorpg;
  searchTerm:string;
  p = 1;
  constructor(private gds : GamesdataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getMMORPG().subscribe(
      mData => {
            this.mmorpg = mData;
      },
      err => {
        console.log('err in getting mmorpg games', err);
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/action/'+id)
  }

}
