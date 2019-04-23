import {Company} from './company';
import {Student} from './student';

export interface Internship {
  id?: number;
  name?: string;
  student?: Student;
  company: Company;
  startDate?: Date;
  endDate?: Date;
  period?: String;
  contractRenewed?: String;
  salary?: String;
  residence?: String;
  hasCompanyCar?: Boolean;
  rating?: number;
  tuteur?: String;
}
