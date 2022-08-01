import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Models/IMovie';
import { MovieRepository } from '../Models/MovieRepository';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  /*movies = ["film 1", "film 2", "film 3"] */
  title = "Film Listesi";
  movies: IMovie[];
  popularMovies: IMovie[];
  movieRepository: MovieRepository;
  today = new Date();
  filterText: string = "";
  value: string = "teach";
  value1: string = "teachcareer";
  value2: string = "teachcareer angular bootcamp";
  filterMovies: IMovie[];

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
    this.filterMovies = this.movies;
  }

  onInputChange() {
    console.log(this.filterText);
    this.filterMovies = this.filterText ? this.movies.filter((m: IMovie) => 
          m.title.toLocaleLowerCase().indexOf(this.filterText) !== -1 || 
          m.description.toLocaleLowerCase().indexOf(this.filterText) !== -1) : this.movies
    /*
    filterText = filterText.toLowerCase();
    console.log(filterText);

    // return filterText ? movies.filter((x: IMovie) => x.title.toLowerCase().includes(filterText) 
    //                                               || x.description.toLowerCase().includes(filterText)) : movies;
  */
  }

  addToList($event: any, movie: IMovie) {
    /*console.log(movie.title + " eklendi");
    console.log($event);
    console.log($event.target);
    console.log($event.target.classList);
    console.log($event.target.textContent);
    console.log($event.target.innerText); 
    console.log($event.target.classList.contains("btn-success"));*/
    if($event.target.classList.contains("btn-success")) {
      $event.target.classList.remove("btn-success");
      $event.target.classList.add("btn-danger");
      $event.target.textContent = "Listeden Çıkar";
    } else {
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-success");
      $event.target.innerText = "Listeye Ekle";
    }
  }
}
