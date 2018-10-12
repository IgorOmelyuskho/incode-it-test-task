import {Component, EventEmitter, ViewChild, OnInit, Output} from '@angular/core';
import {ClientsService} from '../../services/clients/clients.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Client} from '../../classes/client';
import * as clientAction from '../../store/actions/clients';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  @Output() select = new EventEmitter();
  displayedColumns: string[] = ['avatar', 'name', 'jobTitle'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<fromRoot.State>, private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientsService.loadClients().subscribe(clients => {
      let client: Client;
      const res: Client[] = [];
      for (let i = 0; i < clients.length; i++) {
        client = new Client(clients[i]);
        res.push(client);
      }
      this.store.dispatch(new clientAction.AddMany(res));
      this.clientsService.clients.paginator = this.paginator;
    });
  }

}
