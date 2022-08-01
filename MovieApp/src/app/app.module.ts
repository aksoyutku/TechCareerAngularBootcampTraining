import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movies/movie/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ToastrNameService } from './toastr/datas/mock-datas.service';
import { ToasterServiceMethods } from './services/toastr.service';

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
  ],
  imports: [ /* modules */
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ToastrNameService, ToasterServiceMethods], /* services */
  bootstrap: [AppComponent]
})
export class AppModule { }
