import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../Models/IMovie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: IMovie[], filterText: string): IMovie[] {
    filterText = filterText.toLowerCase();
    console.log(filterText);

    // return filterText ? movies.filter((x: IMovie) => x.title.toLowerCase().includes(filterText) 
    //                                               || x.description.toLowerCase().includes(filterText)) : movies;

    return filterText ? movies.filter((m: IMovie) => m.title.toLocaleLowerCase().indexOf(filterText) !== -1 
                                                  || m.description.toLocaleLowerCase().indexOf(filterText) !== -1) : movies;
  }
}