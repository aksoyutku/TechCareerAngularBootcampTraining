import { ITodoItem } from "./ITodoItem";
import { TodoItemProperty } from "./todo";

export class GeneralModel {
    name: any;
    items: string[];
    todoItems: ITodoItem[];
    todoItemsConst: TodoItemProperty[];

    constructor() {
        this.name = "TeachCareer Angular Bootcamp ToDo List";
        this.items = ["Ahmet", "Ömer", "Anıl", "Sinan"];
        this.todoItems = [
            { id: 3, description: "Ödev1", status: true },
            { id: 4, description: "Temizlik1", status: false },
            { id: 5, description: "Kahvaltı1", status: false },
        ]
    }
}
