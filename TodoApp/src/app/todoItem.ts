// export class TodoItem {
//     id: number
//     description: string;
//     action: string;

//     constructor(_id: number, _description: string, _action: string) {
//         this.id = _id;
//         this.description = _description;
//         this.action = _action;
//     }
// }

/* public veya private tanımlaması yapmamız gerekmektedir. */
export class todoItem {
    constructor(public description: string, public action: boolean) {
        this.description = description;
        this.action = action;
    }
}