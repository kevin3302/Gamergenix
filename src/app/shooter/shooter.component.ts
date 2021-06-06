import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.css']
})
export class ShooterComponent implements OnInit {

  mySubscription : Subscription;
  shooter;
  searchTerm:string;
  p = 1;
  constructor(private gds : GamesdataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getShooter().subscribe(
      shooterData => {
            this.shooter = shooterData;
      },
      err => {
        console.log('err in getting shooter games', err);
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/action/'+id)
  }

}
