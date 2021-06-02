import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [

  {path:"games", component:GamesComponent, children:[
    {path:"action", component:ActionComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
