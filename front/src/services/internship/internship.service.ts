import { Injectable } from '@angular/core';
import {Internship} from '../../models/internship';
import {BehaviorSubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class InternshipService {
  private internshipList: Internship[] = [];
  private searchTerms = new Subject<Internship>();
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);

  private internshipUrl = 'http://localhost:9428/api/internships/';
  private companyId: number = null;

  constructor(private http: HttpClient) {
     this.loadInternships();
  }

  loadInternships(): void {
    this.http.get<Internship[]>(this.internshipUrl).subscribe( internships => {
      this.internshipList = internships;
      this.internships$.next(internships);
    });
  }

  public setCompanyId(id: number) {
    this.companyId = id;
    this.http.get<Internship[]>(this.internshipUrl + '?companyId=' + id).subscribe(value => {
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
  filterIntern(urlExtra: string) {
    this.http.get<Internship[]>(this.internshipUrl + '?' + urlExtra).subscribe(value => {
      this.internshipList = value;
      this.internships$.next(value);
    });
  }
}
