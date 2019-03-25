import {Pays} from './pays';
export interface Companies {
  id?: number;
  iconImage?: string;
  name?: string;
  locationPay?: Pays;
  address?: string;
  rating?: number;
  typeStage?: string;
  numberEmployees?: number;
  creationDate?: string;
  opportunity?: number;
}
