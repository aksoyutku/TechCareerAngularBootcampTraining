import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/Models/ICategory';
import { CategoryService } from 'src/app/services/category.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categoies: ICategory[];
  model: any = {
    categoryId: ''
  };

  constructor(private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categoies = data);
  }

  /* title: any, description: any, imageUrl: any, categoryId: any */
  createMovie(form: NgForm) {
    /*if (title.value === "" || description.value === "" || imageUrl.value === "" || categoryId.value === "-1") {
      this.toastrService.error("tüm alanları doldurmalısınız");
      return;
    }
    if (title.value.length < 5) {
      this.toastrService.error("tite için min. 5 karakter girmelisiniz.");
      return;
    }
    if (description.value.length < 10 || description.value.length > 50) {
      this.toastrService.error("description için 10-50 karakter aralığında değer girmelisiniz.");
      return;
    }*/
    /* .jpeg, .jpg, .png - 1.jpg */
    /*const extensions = ["jpeg", "jpg", "png"];
    const extension = imageUrl.value.split('.').pop();
    if(extensions.indexOf(extension) === -1) {
      this.toastrService.error("sadece '.jpeg', '.jpg', '.png' resimleri ekleyebilirsiniz.");
      return;
    }*/

    /*console.log(title.value);
    console.log(description.value);
    console.log(imageUrl.value);
    console.log(categoryId.value); */

    /*const movie = {
      id: 0,
      title: title.value,
      description: description.value,
      imageUrl: imageUrl.value,
      categoryId: categoryId.value,
      isPopular: false,
      datePublished: new Date().getTime()
    };*/

    // this.movieService.createMovie(movie).subscribe(data => {
    //   /*this.router.navigate(['movies']);*/
    //   this.router.navigate(['movies', data.id]);
    // })


    console.log(this.model);
    console.log(form);
  }

  log(value: any) {
    console.log(value.value);
  }
}