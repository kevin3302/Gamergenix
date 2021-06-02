import { Component, OnInit } from '@angular/core';
import { GamesdataService } from '../gamesdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
