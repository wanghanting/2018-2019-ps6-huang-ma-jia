import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../models/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private studentList: Student[] = [];

  private studentsUrl = 'http://localhost:9428/api/students/';

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public student$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor(
    private http: HttpClient) {
      this.getStudent();
     }

  public getStudent() {
    this.http.get<Student[]>(this.studentsUrl).subscribe(value => {
      this.studentList = value;
      this.student$.next(value);
    });
  }
}
