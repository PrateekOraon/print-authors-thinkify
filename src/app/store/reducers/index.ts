import { combineReducers } from "redux";
import { Author } from "src/app/model";
import { ActionType } from "../actions/authors.actions";
import { authorsReducer } from "./authors.reducer";

export interface IAppState {
    authors: Author[]
}

export const INITIAL_STATE: IAppState = {
    authors: []
}

export const rootReducer = combineReducers({
    authors: authorsReducer
})
