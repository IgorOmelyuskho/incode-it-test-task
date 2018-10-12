import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { ClientsPageComponent } from './components/clients-page/clients-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ClientsPageComponent,
    SearchInputComponent,
    ClientsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    StoreDevtoolsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
