import { Injectable } from "@angular/core";
import { combineEpics, Epic } from "redux-observable";
import { AuthorsEpic } from "./authors.epics";

@Injectable({
    providedIn: 'root'
})

export class RootEpic {
    epics: Epic<any>;

    constructor(private authorsEpic: AuthorsEpic) {
        this.epics = combineEpics(
            this.authorsEpic.getAuthorsEpic
        )
    }
}