import { Injectable } from '@angular/core';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { BehaviorSubject } from 'rxjs/index';
import {Student} from "../../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private studentList: Student[] = STUDENTS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor() {
  }
  /**
   addTicket(ticket: Ticket) {
    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList);
  }

   deleteTicket(ticket: Ticket) {
    console.log("ticket.service.ts");
    this.ticketList.splice(this.ticketList.indexOf(ticket),1);
    this.tickets$.next(this.ticketList);
  }**/
}
