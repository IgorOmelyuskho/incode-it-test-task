import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as fromClients from './clients';

export interface State {
    clientsStore: fromClients.State;
}

export const reducers: ActionReducerMap<State> = {
    clientsStore: fromClients.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getClientsSelector = createSelector(
    createFeatureSelector<fromClients.State>('clientsStore'),
    fromClients.getClients,
);

export const getSelectedSelector = createSelector(
    createFeatureSelector<fromClients.State>('clientsStore'),
    fromClients.getSelected,
);

export const getSelectedClient = createSelector(
    getSelectedSelector,
    getClientsSelector,
    (selected) => {
        return {
          selected
        };
    }
);

export const getAllClients = createSelector(
    getClientsSelector,
    (clients) => {
        return clients;
    }
);
