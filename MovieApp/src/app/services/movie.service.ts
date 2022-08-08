import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IMovie } from '../Models/IMovie';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/movies";

  /*
     this.http.get<IMovie[]>("http://localhost:3000/movies").subscribe(data => {
       this.movies = data;
     });    
   */

  getMovies(categoryId: number): Observable<IMovie[]> {
    /* http://localhost:3000/movies?categoryId=7 */
    let newUrl = this.url;

    if (categoryId) {
      newUrl += '?categoryId=' + categoryId;
    }

    return this.http.get<IMovie[]>(newUrl).pipe(
      tap(data => console.log("Movies Service: ", data)),
      catchError(this.handleError)
    );
  }

  /* Observable Design Patter */
  getMovieById(movieId: number): Observable<IMovie> {
    return this.http.get<IMovie>(this.url + "/" + movieId);
  }

  createMovie(movie: IMovie, token?: string): Observable<IMovie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<IMovie>(this.url, movie, httpOptions);
  }

  /*
    error: {}
    headers: HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, lazyInit: ƒ}
    message: "Http failure response for http://localhost:3000/movie: 404 Not Found"
    name: "HttpErrorResponse"
    ok: false
    status: 404
    statusText: "Not Found"
    url: "http://localhost:3000/movie"
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("ErrorEvent : " + error.error.message)
    } else {
      switch (error.status) {
        case 404:
          console.log("404");
          break;
        case 403:
          console.log("403");
          break;
        case 500:
          console.log("500");
          break;
        default:
          console.log("bilinmeyen err");
          break;
      }
    }
    return throwError("hata oluştu");
  }

  postMovie(movie: IMovie) {
    return this.http.post(this.url, movie);
  }

  deleteMovie(movieId: number) {
    return this.http.delete(this.url + "/" + movieId)
  }

  updateMovie(movieId: number, movie: IMovie) {
    return this.http.put(this.url + "/" + movieId, movie)
  }
}