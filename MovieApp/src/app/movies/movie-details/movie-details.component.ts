import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/Models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovie;
  pValue: number = 0;
  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=> {
      this.pValue = param["movieId"];
      this.movieService.getMovieById(param["movieId"]).subscribe(data => {
        this.movie = data;
      })
    });
  }
}
