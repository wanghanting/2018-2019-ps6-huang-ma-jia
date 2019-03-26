import {Company} from './company';
import {Student} from './student';

export interface Internship {
  id?: number;
  name?: string;
  // iconImage?: string;
  student?: Student;
  company: Company;
  startDate?: Date;
  endDate?: Date;
}
