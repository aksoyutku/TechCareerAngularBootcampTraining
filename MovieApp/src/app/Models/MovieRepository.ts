import { IMovie } from "./IMovie";

export class MovieRepository {
    private movies: IMovie[];
    private cmovies: IMovie[]
    constructor() { }

    getMovies(): IMovie[] { return this.movies; }
    getMovieById(id: number): IMovie { return this.movies.find(i => i.id == id); }
    /* getPopularMovies(): IMovie[] { return this.movies.filter(i => i.isPopular); } */
}