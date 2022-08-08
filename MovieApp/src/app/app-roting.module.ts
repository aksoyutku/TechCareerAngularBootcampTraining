import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'comments', component: CommentsComponent },
  { path: 'movies/category/:categoryId', component: MoviesComponent },
  { path: 'movies/:movieId', component: MovieDetailsComponent },
  { path: 'movie/create', component: MovieCreateComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRotingModule { }
