import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  mySubscription : Subscription;
  social;
  searchTerm:string;
  p = 1;
  constructor(private gds : GamesdataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getSocial().subscribe(
      socialData => {
            this.social = socialData;
      },
      err => {
        console.log('err in getting social games', err);
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/action/'+id)
  }

}
