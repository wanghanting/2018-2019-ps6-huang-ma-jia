import {Pays} from './pays';
import {Companies} from './companies';
import {Student} from './student';

export interface Stage {
  id?: number;
  idEntreprise?: number;
  // iconImage?: string;
  student?: Student;
  company: Companies;
  locationPay?: Pays;
  address?: string;
  typeStage?: string;
  startDate?: Date;
  endDate?: Date;
}
