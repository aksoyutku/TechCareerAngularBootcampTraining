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
  categories: ICategory[];
  categoryRepository: CategoryRepository;

  constructor() { 
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {
  }

}