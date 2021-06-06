import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mmo',
  templateUrl: './mmo.component.html',
  styleUrls: ['./mmo.component.css']
})
export class MmoComponent implements OnInit {

  mySubscription : Subscription;
  mmo;
  searchTerm:string;
  p = 1;
  constructor(private gds : GamesdataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getMMO().subscribe(
      mData => {
            this.mmo = mData;
      },
      err => {
        console.log('err in getting mmo games', err);
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/action/'+id)
  }

}
