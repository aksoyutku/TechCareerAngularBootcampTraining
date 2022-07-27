import { Component } from '@angular/core';
import { ITodoItem } from '../ITodoItem';
import { Model } from '../model';
import { todoItem } from '../todoItem';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  model = new Model()
  getTodoName() { return this.model.name; }
  getTodoItems() {
    if (this.displayyAll) {
      return this.model.todoItems;
    }
    return this.model.todoItems.filter(x => x.action == false);
  }

  constructor() { this.model.todoItems = this.getItemsFromLS(); }
  inputCss: string;
  displayyAll: boolean = false;
  
  addItem() {
    if (this.inputText != "") {
      let data = { description: this.inputText, action: false };
      this.model.todoItems.push(data);
      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));
      this.inputText = "";
    }
    else {
      alert("bilgi giriniz.")
    }
  }
  getItemsFromLS() {
    let items: todoItem[] = [];
    let value = localStorage.getItem("items");
    if (value != null) {
      items = JSON.parse(value);
    }
    return items;
  }

  onActionChanged(item: todoItem) {
    let items = this.getItemsFromLS();
    localStorage.clear();
    items.forEach(i => {
      if (i.description == item.description) {
        i.action = item.action;
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
  }


  changeCss() { this.inputCss = "1px solid red"; }
  focusEvent() { console.log("focus"); }
  getCount() { return this.model.todoItems.filter(item => item.action).length; }
  inputText: string = "";
  getBtnClasses() {
    return {
      'disabled': this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0
    }
  }
}
