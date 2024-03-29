import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  mySubscription : Subscription;
  action;
  searchTerm:string;
  p = 1;
  constructor(private gds : GamesdataService, private router : Router) { }

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

  onSelectId(id)
  {
    this.router.navigateByUrl('/gamesinfo/'+id)
  }

}
