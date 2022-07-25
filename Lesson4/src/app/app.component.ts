import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.lists = JSON.parse(localStorage.getItem("items"));
  }

  isVisible: boolean;
  title = 'Lesson4';
  inputValue: string;

  items: ITodo[] = [
    { id: 1, description: "Angular" },
    { id: 2, description: "Blazor" }
  ];

  lists: IList[] = [
    // { title: "maxime", description: " maxime ut a sint vitae ", count: 5 },
    // { title: "adipisicing", description: "adipisicing elit. Veniam ", count: 8 },
    // { title: "sit amet", description: " sit amet consectetur", count: 3 },
    // { title: "Lorem ipsum", description: "Lorem ipsum dolor", count: 1 },
    // { title: "quod at", description: "quod at labore accusamus ", count: 3 },
    // { title: "soluta volup", description: "soluta voluptatum rem", count: 0 },
    // { title: "tempora, alias", description: " tempora, alias nulla laudantium ", count: 2 }
  ];

  saveList() {
    localStorage.setItem("items", JSON.stringify(this.lists))
  }

  binding: boolean = true;
  text: string = "Hepsini Göster";
  techCareer() {
    if (this.binding) {
      this.text = "Hepsini Göster";
      
      return this.lists;
    } else {
      this.text = "Yapılanları Göster";
      return this.lists.filter(x => x.count);
    }
  }


}

export class Todo {
  _id: number;
  _description: string;

  constructor(id: number, description: string) {
    this._id = id;
    this._description = description;
  }
}

export interface ITodo {
  id: number;
  description: string;
}

export interface IList {
  title: string
  description: string;
  count: number
}