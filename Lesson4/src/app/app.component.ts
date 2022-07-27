import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.lists = JSON.parse(localStorage.getItem("items"));
    console.log(this.inputText)
  }

  isVisible: boolean;
  title = 'Lesson4';
  inputValue: string;

  items: ITodo[] = [
    { id: 1, description: "Angular" },
    { id: 2, description: "Blazor" },
  ];

  lists: IList[] = [
    //  { title: "maxime", description: " maxime ut a sint vitae ", count: 5 },
    //  { title: "adipisicing", description: "adipisicing elit. Veniam ", count: 8 },
    //  { title: "sit amet", description: " sit amet consectetur", count: 3 },
    //  { title: "Lorem ipsum", description: "Lorem ipsum dolor", count: 1 },
    //  { title: "quod at", description: "quod at labore accusamus ", count: 3 },
    //  { title: "soluta volup", description: "soluta voluptatum rem", count: 0 },
    //  { title: "tempora, alias", description: " tempora, alias nulla laudantium ", count: 2 }
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

  /* Ders5 */
  itemms: Todo[] = [
    { _id: 1, _description: "Angular", _action: true },
    { _id: 2, _description: "Blazor", _action: false },
    { _id: 3, _description: "Vue", _action: true },
    { _id: 4, _description: ".Net", _action: false },
    { _id: 5, _description: "Java", _action: true },
    { _id: 6, _description: "React", _action: false }
  ];
  getCount() {
    return this.itemms.filter(i => i._action).length;
  }
  inputText: string = "";
  enterKeyup() {
    console.log(this.inputText);
  }
  getBtnClass() {
    /* {cssClass: expression} 
       {'bg-primary': inputText != ''}
     */
    return {
      'disabled': this.inputText.length == 0,
      'bg-danger': this.inputText.length == 0,
      'bg-primary': this.inputText.length > 0,
    }
  }

}

export class Todo {
  _id: number;
  _description: string;
  _action: boolean;

  constructor(id: number, description: string, action: boolean) {
    this._id = id;
    this._description = description;
    this._action = action;
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

