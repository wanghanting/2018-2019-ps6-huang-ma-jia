import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../models/student';
import {Company} from '../../models/company';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */
  private studentList: Student[] = [];

  private studentUrl = 'http://localhost:9428/api/students/';
  public student$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor(private http: HttpClient) {
  }
  public formChange(form: FormGroup) {
    this.http.get<Student[]>(this.studentUrl + '?'
      + (form.getRawValue().sector ? ('&sector=' + form.getRawValue().sector) : '')
      + (form.getRawValue().specialty ? ('&specialty=' + form.getRawValue().specialty) : '')
    ).subscribe(value => {
      this.studentList = value;
      this.student$.next(value);
    });
  }
  public OneStudentService(id) {
    this.http.get<Student[]>(this.studentUrl + '?id=' + id).subscribe(value => {
      this.studentList = value;
      this.student$.next(value);
    });
  }

}
