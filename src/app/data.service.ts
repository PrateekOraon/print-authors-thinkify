import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Author, AuthorsResponse } from "./model";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) {}

    public getAuthors(): Observable<Author[]> {
        return this.http.get<AuthorsResponse>("https://jsonmock.hackerrank.com/api/articles").pipe(
            map(res => res.data)
        )
    }
}