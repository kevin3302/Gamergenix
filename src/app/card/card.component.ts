import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  mySubscription : Subscription;
  cards;
  searchTerm:string;
  p = 1;

  constructor(private gds : GamesdataService, private router : Router) { }

  ngOnInit(): void {
    this.mySubscription = this.gds.getCard().subscribe(
      cardData => {
            this.cards = cardData;
      },
      err => {
        console.log('err in getting card games', err);
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/action/'+id)
  }

}
