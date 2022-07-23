export class Todo {
    id: number;
    description: string;
    status: string;

    constructor(id: number, description: string, status: string) {
        this.id = id;
        this.description = description;
        this.status = status;
    }
}

export class TodoItemProperty {
    description: string;
    status: string;
}

export class TodoItemConstructor {    
    constructor(public description: string, public status: string) {
        this.description = description;
        this.status = status;
    }
}