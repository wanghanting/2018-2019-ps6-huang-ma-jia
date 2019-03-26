import {Country} from './country';
export interface Company {
  id?: number;
  name?: string;
  iconImage?: string;
  locationCountry?: Country;
  address?: string;
  rating?: number;
  numberEmployees?: number;
  creationDate?: Date;
  opportunity?: number;
}
