import { ActionType, AuthorActions } from "../actions/authors.actions";

export const authorsReducer = (state = [], action: ActionType) => {
    const payload = action.payload;

    switch(action.type) {
        case AuthorActions.FETCH_AUTHORS_SUCCESS:
            return [...payload];

        default: 
            return state;
    }
}