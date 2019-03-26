import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {StudentService} from '../services/student/student.service';
import {SearchCompanyPageComponent} from './search-companies/search-company-page';
import {SearchCompanyComponent} from './search-companies/search-company';
import {SearchCompanyFormComponent} from './search-companies/search-company-form';
import {SearchCompanyListComponent} from './search-companies/search-company-list';
import {AppRoutingModule} from './app.AppRoutingModule';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    SearchCompanyComponent,
    SearchCompanyFormComponent,
    SearchCompanyListComponent,
    SearchCompanyPageComponent,
    HeaderComponent // All the components needs to be declared
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule// , // Import all dependencies
    // AppRoutingModule
  ],
  providers: [TicketService, StudentService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
