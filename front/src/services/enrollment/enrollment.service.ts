import { Injectable } from '@angular/core';
import {Internship} from '../../models/internship';
import {BehaviorSubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {
  private internshipList: Internship[] = [];
  private searchTerms = new Subject<Internship>();
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);

  private enrollUrl = 'http://localhost:9428/api/activity/';

  constructor(private http: HttpClient) {
  }

  enroll(id, firstname, lastname, specialty) {
    const info = {'id': id, 'firstname': firstname, 'lastname': lastname, 'specialty': specialty};
    this.http.post(this.enrollUrl, info).subscribe();
  }
}
