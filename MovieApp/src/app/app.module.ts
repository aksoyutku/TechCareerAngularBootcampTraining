import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movies/movie/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { ToastrNameService } from './toastr/datas/mock-datas.service';
import { ToasterServiceMethods } from './services/toastr.service';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [ /* components */
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
    CommentsComponent,
  ],
  imports: [ /* modules */
    BrowserModule,
    FormsModule,
    /* Toastr Begin */
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    /* Toastr End */
    HttpClientModule 
  ],
  providers: [ToastrNameService, ToasterServiceMethods], /* services */
  bootstrap: [AppComponent]
})
export class AppModule { }
