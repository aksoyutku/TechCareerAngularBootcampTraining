import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from '../Models/CategoryRepository';
import { ICategory } from '../Models/ICategory';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  /*categories: string[] = ["Macera", "Romanik", "Bilim Kurgu", "Komedi"];*/
  categories: ICategory[] = [];
  categoryRepository: CategoryRepository;
  selectedCategory: ICategory = null;
  displayAll = true;

  constructor(private http: HttpClient) {
    this.categoryRepository = new CategoryRepository();
    // this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {
    this.http.get<ICategory[]>("http://localhost:3000/categories").subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(category?: ICategory) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}