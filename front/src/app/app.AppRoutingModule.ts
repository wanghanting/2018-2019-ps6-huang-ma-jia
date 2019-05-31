import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryPageComponent} from './countries/country-page';
import {SearchCompanyPageComponent} from './search-companies/search-company-page';
import {CompanyPageComponent} from './company/company-page';
import {HomePageComponent} from './tickets/home-page';
import {StudentPageComponent} from './student/student';
import {SearchInternshipPageComponent} from './search-internship/search-internship-page';
import {EnrollPageComponent} from './enroll/enroll-page.component';
import {LoginPageComponent} from './login';
import {ManageListComponent} from './manage-list';
import {ContactPageComponent} from './contact';

const routes: Routes = [
  {path: 'search-companies', component: SearchCompanyPageComponent},
  {path: 'company', component: CompanyPageComponent},
  {path: 'country', component: CountryPageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'student', component: StudentPageComponent},
  {path: 'search-internship', component: SearchInternshipPageComponent},
  {path: 'enroll', component: EnrollPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'manage-list', component: ManageListComponent},
  {path: 'contact', component: ContactPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {


}
