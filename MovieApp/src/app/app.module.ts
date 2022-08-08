import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRotingModule } from './app-roting.module';
import { HttpClientModule } from '@angular/common/http';
/* Components  */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { ToastrNameService } from './toastr/datas/mock-datas.service';
import { ToasterServiceMethods } from './services/toastr.service';
import { CommentsComponent } from './comments/comments.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';

@NgModule({
  declarations: [ /* components */
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
    CommentsComponent,
    MovieCreateComponent,
  ],
  imports: [ /* modules */
    BrowserModule,
    FormsModule,
    /* Toastr Begin */
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    /* Toastr End */
    HttpClientModule,
    AppRotingModule
  ],
  providers: [ToastrNameService, ToasterServiceMethods], /* services */
  bootstrap: [AppComponent]
})
export class AppModule { }
