import {Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients/clients.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor(public clientsService: ClientsService) {
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.clientsService.clients.filter = filterValue.trim().toLowerCase();
  }

}
