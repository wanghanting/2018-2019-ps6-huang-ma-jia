import { Injectable } from '@angular/core';
import {Internship} from '../../models/internship';
import {BehaviorSubject, Subject} from 'rxjs';
import {INTERNSHIP_MOCKED} from '../../mocks/internship';
import {HttpClient} from '@angular/common/http';
import {Company} from '../../models/company';

@Injectable({
  providedIn: 'root'
})

export class InternshipService {
  private internshipList: Internship[] = INTERNSHIP_MOCKED;
  private internshipFiltered: Internship[];
  private searchTerms = new Subject<Internship>();
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);

  private internshipUrl = 'http://localhost:9428/api/internships/';

  constructor(private http: HttpClient) {
  }

  Internshipfilter() {
    this.loadInternships(URL);
    return this.internshipFiltered;
  }

  loadInternships(URL): void {
    this.http.get<Internship[]>(URL).subscribe( internships => {
      this.internshipFiltered = internships;
      this.internships$.next(internships);
    });
  }
  // public setCountryId(id : number) {
  //   this.http.get<Company[]>(this.companyUrl + "country=" + id).subscribe(value => {
  //     this.internshipList = value;
  //     this.companies$.next(value);
  //   });
  // }
  filterInternships(contractRenewed= null, hasCompanyCar= null) {
    this.http.get<Internship[]>(this.internshipUrl + 'search/?contract=' + contractRenewed + '&hasCompanyCar=' + hasCompanyCar).subscribe(value => {
      this.internshipList = value;
      this.internships$.next(value);
    });
  }
}
