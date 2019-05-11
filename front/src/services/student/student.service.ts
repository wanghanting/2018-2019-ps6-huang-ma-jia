import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

    //private countryList: Country[] = []; A remettre quand le back marche
  private studentList: String[];

  private studentUrl = 'http://localhost:9428/api/student/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public student$: BehaviorSubject<String[]> = new BehaviorSubject(this.studentList);

  constructor(
    private http: HttpClient) {
    this.http.get<String[]>(this.studentUrl).subscribe(value => {
      this.studentList = value;
      this.student$.next(value);
    });
  }

}
