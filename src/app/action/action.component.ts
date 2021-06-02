import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  mySubscription : Subscription;
  action;
  constructor(private gds : GamesdataService) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getAction().subscribe(
      acData => {
            this.action = acData;
      },
      err => {
        console.log('err in getting strategy games', err);
      }
    )
  }

}
