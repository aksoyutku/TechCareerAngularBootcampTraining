import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICategory } from "../Models/ICategory";

@Injectable()
export class CategoryService {
    url = "http://localhost:3000/categories";

    constructor(private http: HttpClient) {}

    getCategories() {
        return this.http.get<ICategory[]>(this.url);
    }
}