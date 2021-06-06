import { Pipe, PipeTransform } from '@angular/core';
import { games } from './models/games.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //search pipe
  transform(game: games[], searchTerm:string): games[]
  {

    // if we not entered any product..it means search bar is empty, it returns the all producst
    if(!game || !searchTerm)
    {
      return game;
    }

    //if search bar is not empty, it gives the matched item for entered element
    else
    {
      return game.filter(game=>game.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }
}