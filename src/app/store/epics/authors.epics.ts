import { Injectable } from "@angular/core";
import { ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { DataService } from "src/app/data.service";
import { ActionType, AuthorActions } from "../actions/authors.actions";

@Injectable({
    providedIn: 'root'
})
export class AuthorsEpic {
    constructor(private dataService: DataService) {}

    getAuthorsEpic = (action$) => action$.pipe(
        ofType(AuthorActions.FETCH_AUTHORS),
        mergeMap(_ => {
            return this.dataService.getAuthors();
        }),
        map(result => ({
            type: AuthorActions.FETCH_AUTHORS_SUCCESS,
            payload: result
        })),
        catchError(error => of({
            type: AuthorActions.FETCH_AUTHORS_FAIL
        }))
    )

}