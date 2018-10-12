import { Injectable } from '@angular/core';
import {Client} from '../../classes/client';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients: MatTableDataSource<Client> = new MatTableDataSource([]);

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) {
    store.select(fromRoot.getAllClients).subscribe(value => {
      this.clients = new MatTableDataSource<Client>(value);
    });
  }

  loadClients(): Observable<Client[]> {
    return this.http.get<Client[]>('../assets/clients.json');
  }
}

