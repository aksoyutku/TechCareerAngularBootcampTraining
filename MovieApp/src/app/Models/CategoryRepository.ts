import { ICategory } from "./ICategory";

export class CategoryRepository {
    private categories: ICategory[];

    constructor() {
        this.categories = [
            { id: 1, name: "Macera" },
            { id: 2, name: "Romanik" },
            { id: 3, name: "Bilim Kurgu" },
            { id: 4, name: "Komedi" },
        ]
    }

    getCategories(): ICategory[] { return this.categories; }
}