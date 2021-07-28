import { NgRedux } from "@angular-redux/store";
import { Injectable } from "@angular/core";
import { AnyAction } from "redux";
import { IAppState } from "../reducers";

export interface ActionType extends AnyAction {
    type: string;
    payload: any;
}

@Injectable({
    providedIn: 'root'
})
export class AuthorActions {
    static FETCH_AUTHORS = "FETCH_AUTHORS";
    static FETCH_AUTHORS_SUCCESS = "FETCH_AUTHORS_SUCCESS";
    static FETCH_AUTHORS_FAIL = "FETCH_AUTHORS_FAIL";

    constructor(private ngRedux: NgRedux<IAppState>) {}

    fetchAuthors() {
        this.ngRedux.dispatch({
            type: AuthorActions.FETCH_AUTHORS
        })
    }
}