import { Action } from '@ngrx/store';
import * as clientAction from '../actions/clients';
import { Client } from '../../classes/client';

export interface State {
  clients: Client[];
  selected: Client;
}

export const initialState: State = {
  clients: [],
  selected: null
};

export function reducer(state: State = initialState, action: clientAction.Action) {
  switch (action.type) {

    case clientAction.ADD_MANY: {
      const newClients: Client[] = action.payload;
      return {
        ...state,
        clients: [...state.clients, ...newClients ]
      };
    }

    case clientAction.SELECT: {
      const selectedClient: Client = action.payload;
      return {
        ...state,
        selected: selectedClient
      };
    }

    default:
      return state;
  }
}

export const getClients = (state: State) => state.clients;
export const getSelected = (state: State) => state.selected;



