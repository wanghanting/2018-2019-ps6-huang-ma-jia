import {Company} from './company';
import {Student} from './student';

export interface Internship {
  id?: number;
  name?: string;
  studentId?: number;
  companyId: number;
  startDate?: string;
  endDate?: string;
  period?: string;
  contractRenewed?: string;
  salary?: string;
  residence?: string;
  hasCompanyCar?: Boolean;
  rating?: number;
  tuteur?: string;
  stuProfile?: string;
  stuName?: string;
}
