import { IMovie } from "./IMovie";

export class MovieRepository {
    private movies: IMovie[];
    private cmovies: IMovie[]
    constructor() {
        this.movies = [
            { id: 1, title: "Film 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam inventore neque. Delectus nam magni, fuga iste quo ipsam. Accusantium impedit eos at fuga quaerat quasi cum esse sit blanditiis.", imageUrl: "1.jpg", isPopular: false, categoryId: [1, 2, 3], datePuslished: new Date(1850, 12, 12) },
            { id: 2, title: "Film 2", description: "fuga quaerat quasi cum esse sit blanditiis.", imageUrl: "2.jpg", isPopular: true, categoryId: [1, 3], datePuslished: new Date(1950, 9, 9) },
            { id: 3, title: "Film 3", description: "Molestiae aliquam inventore neque. Delectus nam magni", imageUrl: "3.jpg", isPopular: false, categoryId: [2, 3], datePuslished: new Date(2021, 1, 15) },
            { id: 4, title: "Film 4", description: "consectetur adipisicing elit. Molestiae aliquam", imageUrl: "4.jpg", isPopular: false, categoryId: [2, 4], datePuslished: new Date(1994, 9, 8) },
            { id: 5, title: "Film 5", description: "sit amet consectetur adipisicing", imageUrl: "5.jpg", isPopular: true, categoryId: [4, 1], datePuslished: new Date(1992, 3, 29) },
        ];
    }

    getMovies(): IMovie[] { return this.movies; }
    getMovieById(id: number): IMovie { return this.movies.find(i => i.id == id); }
    getPopularMovies(): IMovie[] { return this.movies.filter(i => i.isPopular); }
    // getMovieCategoriyId(id: number[]): IMovie { /* 1, 2, 3 */
    //     for (let i = 0; i < this.movies.length; i++) {
    //         for (let j = 0; j < this.movies[i].categoryId.length; j++) {
    //             console.log(this.movies[i].categoryId[j]);
    //             return this.movies.find(x => x.categoryId.filter(y => y == this.movies[i].categoryId[j]));
    //         }
    //     }
    // }
}