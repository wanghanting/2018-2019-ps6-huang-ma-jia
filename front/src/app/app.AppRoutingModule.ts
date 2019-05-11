import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryPageComponent} from './countries/country-page';
import {SearchCompanyPageComponent} from './search-companies/search-company-page';
import {CompanyPageComponent} from './company/company-page';
import {HomePageComponent} from './tickets/home-page';
import {StudentPageComponent} from './student/student';

// import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  {path: 'search-companies', component: SearchCompanyPageComponent},
  {path: 'company', component: CompanyPageComponent},
  {path: 'country', component: CountryPageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'student', component: StudentPageComponent}
    // {path: 'users', component: UserListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {


}
