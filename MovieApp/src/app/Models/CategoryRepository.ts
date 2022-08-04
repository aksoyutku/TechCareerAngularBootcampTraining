import { ICategory } from "./ICategory";

export class CategoryRepository {
    private categories: ICategory[];

    constructor() { }

    getCategories(): ICategory[] { return this.categories; }
}