import { Component } from '@angular/core';
import { GeneralModel } from './GeneralModel';
import { ITodoItem } from './ITodoItem';
import { Todo, TodoItemConstructor, TodoItemProperty } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new GeneralModel();
  
  displayAll: boolean = true;
  itemText: string = "red";
  message: string;
  cssValue: string;
  getName() { return this.model.name; }
  getItems() { return this.model.items; }
  getTodoItems() {
    if (this.displayAll) {
      return this.model.todoItems;
    }
    return this.model.todoItems.filter((x:ITodoItem) => !x.status)
  }
  addItem(item: any) { return this.model.items.push(item); }
  addTodo(item: string) {
    console.log(item)
    if (item == '') {
      alert("bilgi giriniz.");
    } else {
      this.model.todoItems.push({ id: 9999, description: item, status: false});
      //alert(item + " başarıyla eklendi.");
    }
  }
  focusEvent() { console.log("focusEvent çalıştı.") }
  clickInput() { this.itemText = "green"; }


  // private name = 'TeachCareer Angular Bootcamp ToDo List';
  // getName() {
  //   return this.name;
  // }

  // items: string[] = ["Ahmet", "Ömer", "Anıl", "Sinan"];
  // todoItems: ITodoItem[] = [
  //   { id: 3, description: "Ödev", status: "Hayır" },
  //   { id: 4, description: "Temizlik", status: "Evet" },
  //   { id: 5, description: "Kahvaltı", status: "Hayır" },
  //   new Todo(1, "Angular Çalıştın mı?", "Hayır")
  // ];

  // todoItemsConst: TodoItemProperty[] = [
  //   { description: "Kahvaltı", status: "Hayır" },
  //   { description: "Temizlik", status: "Evet" },
  //   { description: "Ödev", status: "Hayır" }
  // ];

  // addItem(item: any) {
  //   this.items.push(item);
  //   console.log(item + " eklendi");
  // }

  inputVisible: any;
  inputValue: string;
  getInputNgModel(inputVisible: any) {
    console.log(inputVisible);
  }
  getInputNgModell(inputValue: string) {
    console.log(inputValue);
  }
  inputV: any;
  inputVl: string;
  getInputV(inputV: any) {
    console.log(inputV);
  }
  getInputVl(inputVl: string) {
    if(inputVl == '') {
      alert("boş");
    }
    console.log(inputVl);
  }
}