import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Models/IMovie';
import { MovieRepository } from '../Models/MovieRepository';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  /*movies = ["film 1", "film 2", "film 3"] */
  title = "Film Listesi";
  movies: IMovie[];
  movieRepository: MovieRepository;
  constructor() { 
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
  }

  ngOnInit(): void {
  }

}
