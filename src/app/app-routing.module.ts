import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { CardComponent } from './card/card.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FightingComponent } from './fighting/fighting.component';
import { GamesComponent } from './games/games.component';
import { MmoComponent } from './mmo/mmo.component';
import { MmorpgComponent } from './mmorpg/mmorpg.component';
import { MobaComponent } from './moba/moba.component';
import { RacingComponent } from './racing/racing.component';
import { ShooterComponent } from './shooter/shooter.component';
import { SocialComponent } from './social/social.component';
import { SportsComponent } from './sports/sports.component';
import { StrategyComponent } from './strategy/strategy.component';

const routes: Routes = [

  {path:"games", component:GamesComponent, children:[
    {path:"action", component:ActionComponent},
    {path:"card", component:CardComponent},
    {path:"fantasy", component:FantasyComponent},
    {path:"fighting", component:FightingComponent},
    {path:"mmorpg", component:MmorpgComponent},
    {path:"mmo", component:MmoComponent},
    {path:"moba", component:MobaComponent},
    {path:"shooter", component:ShooterComponent},
    {path:"social", component:SocialComponent},
    {path:"sports", component:SportsComponent},
    {path:"strategy", component:StrategyComponent},
    {path:"racing", component:RacingComponent},
    {path:'', redirectTo:'/action', pathMatch:'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
