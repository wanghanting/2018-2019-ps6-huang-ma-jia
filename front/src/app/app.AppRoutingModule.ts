import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent} from './countries/country-list';
import {CountryPageComponent} from './countries/country-page';
import {SearchCompanyPageComponent} from './search-companies/search-company-page';
import {CompanyPageComponent} from './company/company-page';
import { CountryTicketListComponent } from './tickets/country-ticket-list/country-ticket-list.component';
// import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  {path: 'search-companies', component: SearchCompanyPageComponent},
  {path: 'company', component: CompanyPageComponent},
  {path: 'countries', component: CountryListComponent},
  {path: 'country', component: CountryPageComponent},
  {path: 'homePage', component: CountryTicketListComponent}
    // {path: 'users', component: UserListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {


}
