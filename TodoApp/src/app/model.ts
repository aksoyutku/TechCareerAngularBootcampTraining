import { ITodoItem } from "./ITodoItem";
import { todoItem } from "./todoItem";

export class Model {
    name: string;
    items: string[];
    todoItems: todoItem[];
    todoitems: ITodoItem[]

    constructor() {
        this.name = "TechCareer Angular Bootcamp";
        this.items = ["elma", "armut", "portakal"]
        this.todoItems = [
            { description: "Breakfast", action: true },
            { description: "Gym", action: false },
            { description: "Shopping", action: true }
        ];
        this.todoitems = [
            { id: 3, description: "Shopping", action: "Yes" },
            { id: 4, description: "Gym", action: "No" },
            { id: 5, description: "Breakfast", action: "Yes" }
        ]
    }
}