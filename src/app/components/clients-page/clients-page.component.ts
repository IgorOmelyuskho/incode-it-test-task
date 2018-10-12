import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../../services/clients/clients.service';
import {Client} from '../../classes/client';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as clientAction from '../../store/actions/clients';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {

  selectedClient: Observable<fromRoot.State>;
  selected: Client;

  constructor(private store: Store<fromRoot.State>, private clientsService: ClientsService) {
    this.selectedClient = store.pipe(select('clientsStore'));
    this.selectedClient.subscribe(value => {
      this.selected = value['selected'];
    });
  }

  ngOnInit() {
  }

  onSelect(selectedClient) {
    this.store.dispatch(new clientAction.Select(selectedClient));
  }



}
