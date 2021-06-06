import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { ActionComponent } from './action/action.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './search.pipe';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './card/card.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FightingComponent } from './fighting/fighting.component';
import { MmorpgComponent } from './mmorpg/mmorpg.component';
import { MmoComponent } from './mmo/mmo.component';
import { MobaComponent } from './moba/moba.component';
import { ShooterComponent } from './shooter/shooter.component';
import { SocialComponent } from './social/social.component';
import { SportsComponent } from './sports/sports.component';
import { StrategyComponent } from './strategy/strategy.component';
import { RacingComponent } from './racing/racing.component';
import { GamesinfoComponent } from './gamesinfo/gamesinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    ActionComponent,
    FooterComponent,
    CardComponent,
    FantasyComponent,
    FightingComponent,
    MmorpgComponent,
    MmoComponent,
    MobaComponent,
    ShooterComponent,
    SocialComponent,
    SportsComponent,
    StrategyComponent,
    RacingComponent,
    GamesinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
