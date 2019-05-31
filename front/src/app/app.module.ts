import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryPageComponent } from './countries';
import { CountryTicketListComponent, CountryTicketComponent} from './tickets';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {PeriodService} from '../services/period/period.service';
import {CountryService} from '../services/country/country.service';
import {ActivitySectorService} from '../services/activitySector/activitySector.service';
import {OneCountryService} from '../services/country/one-country.service';
import {CompanySizeService} from '../services/companySize/companySize.service';
import {StudentService} from '../services/student/student.service';
import {StartdateService} from '../services/startDate/startdate.service';
import {SearchInternshipPageComponent} from './search-internship/search-internship-page';
import {SearchInternshipFormComponent} from './search-internship/search-internship-form';
import {SearchCompanyPageComponent} from './search-companies/search-company-page';
import {SearchCompanyComponent} from './search-companies/search-company';
import {SearchCompanyFormComponent} from './search-companies/search-company-form';
import {SearchCompanyListComponent} from './search-companies/search-company-list';
import {AppRoutingModule} from './app.AppRoutingModule';
import {InternshipComponent} from './company/internship';
import {InternshipListComponent} from './company/internship-list';
import {CompanyPageComponent} from './company/company-page';
import {CompanyComponent} from './company/company';
import { SearchFormComponent } from './company/search-form/search-form.component';
import { InteractiveMapComponent} from './tickets/interactive-map/interactive-map.component';
import { HomePageComponent} from './tickets/home-page/home-page.component';
import { CardInformationComponent } from './tickets/card-information/card-information.component';
import { StudentPageComponent } from './student/student';
import {ProfileComponent} from './profile/profile-page';
import {EnrollPageComponent} from './enroll/enroll-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {LogeComponent} from './loge/loge';
import {LogeListComponent} from './loge/loge-list';
import {ReviewComponent} from './review/review';
import {ReviewListComponent} from './review/review-list';
import {ActivityComponent} from './activity';
import {LoginPageComponent} from './login';
import {ManageListComponent} from './manage-list';
import {ListService} from '../services/list/list.service';
import {LogeService} from '../services/loge/loge.service';
import {ReviewService} from '../services/review/review.service';
import {InternshipService} from '../services/internship/internship.service';
import {ContactPageComponent} from './contact';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    CountryPageComponent,
    CompanyComponent,
    ProfileComponent,
    EnrollPageComponent,
    SearchCompanyComponent,
    SearchCompanyFormComponent,
    SearchCompanyListComponent,
    SearchCompanyPageComponent,
    LogeComponent,
    LogeListComponent,
    InternshipComponent,
    InternshipListComponent,
    CompanyPageComponent,
    CountryTicketListComponent,
    CountryTicketComponent,
    CompanyPageComponent,
    SearchFormComponent,
    InteractiveMapComponent,
    HomePageComponent,
    CardInformationComponent,
    StudentPageComponent,
    SearchInternshipPageComponent,
    SearchInternshipFormComponent,
    HeaderComponent,
    FooterComponent,
    ReviewComponent,
    ReviewListComponent,
    LoginPageComponent,
    ManageListComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppRoutingModule,

  ],
  providers: [CountryService, OneCountryService, ActivitySectorService, CompanySizeService, StudentService, StartdateService, PeriodService,
    ListService, LogeService, ReviewService, InternshipService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
