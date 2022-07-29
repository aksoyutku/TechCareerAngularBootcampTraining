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
  popularMovies: IMovie[];
  movieRepository: MovieRepository;
  today = new Date();
  filterText: string = "";
  value: string = "teach";
  value1: string = "teachcareer";
  value2: string = "teachcareer angular bootcamp";
  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }

}
