import { Action } from '@ngrx/store';
import {Client} from '../../classes/client';

export const SELECT = '[Client] Select';
export const ADD_MANY = '[Client] Add Many';
export const LOAD_CLIENTS = '[Client] Load Clients';

export class Select implements Action {
    readonly type = SELECT;
    constructor(public payload: Client) { }
}

export class AddMany implements Action {
  readonly type = ADD_MANY;
  constructor(public payload: Client[]) { }
}

export class LoadClients implements Action {
  readonly type = LOAD_CLIENTS;
  constructor(public payload: Client[]) { }
}

export type Action = AddMany | Select| LoadClients;


