import { Injectable } from '@angular/core';
import {Internship} from '../../models/internship';
import {BehaviorSubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Company} from '../../models/company';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class InternshipService {
  private internshipList: Internship[] = [];
  private internshipFiltered: Internship[];
  private searchTerms = new Subject<Internship>();
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);

  private internshipUrl = 'http://localhost:9428/api/internships/';
  private companyId: number = null;

  constructor(private http: HttpClient) {
    this.loadInternships(this.internshipUrl)
  }

  // Internshipfilter() {
  //   this.loadInternships(URL);
  //   return this.internshipFiltered;
  // }

  loadInternships(URL): void {
    this.http.get<Internship[]>(URL).subscribe( internships => {
      this.internshipFiltered = internships;
      this.internships$.next(internships);
    });
  }

  public setCompanyId(id : number) {
    this.companyId = id;
    this.http.get<Internship[]>(this.internshipUrl + "?company=" + id).subscribe(value => {
      this.internshipList = value;
      this.internships$.next(value);
    });
  }

  filterInternships(contractRenewed= null, hasCompanyCar= null) {
    this.http.get<Internship[]>(this.internshipUrl + 'search/?contract=' + contractRenewed + '&hasCompanyCar=' + hasCompanyCar).subscribe(value => {
      this.internshipList = value;
      this.internships$.next(value);
    });
  }

  formChange(searchForm: FormGroup) {
    this.http.get<Internship[]>(this.internshipUrl + '?companyId=' + this.companyId
    + (searchForm.getRawValue().contractRenewed ? ('&contractRenewed=' + searchForm.getRawValue().contractRenewed) : '')
    + (searchForm.getRawValue().hasCompanyCar ? ('&hasCompanyCar=' + searchForm.getRawValue().hasCompanyCar) : '')
    ).subscribe(value => {
      this.internshipList = value;
      this.internships$.next(value);
    });
  }
}
