import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent } from './countries/country-list';
import {SearchCompanyPageComponent} from './search-companies/search-company-page';
// import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  {path: 'search-companies', component: SearchCompanyPageComponent},
  {path: 'countries', component: CountryListComponent}
    // {path: 'users', component: UserListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
