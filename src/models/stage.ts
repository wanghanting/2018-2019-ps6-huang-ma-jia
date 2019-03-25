import {Pays} from './pays';
import {Companies} from './companies';

export interface Stage {
  id?: number;
  // iconImage?: string;
  name?: string;
  company: Companies;
  locationPay?: Pays;
  address?: string;
  typeStage?: string;
  startDate?: Date;
  endDate?: Date;
}
