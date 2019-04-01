import {Company} from '../models/company';
import {COUNTRIES_MOCKED} from './countries.mock';

export const COMPANIES_MOCKED: Company[] = [
  {
    id: 0,
    name: 'Apple',
    iconImage: 'appleicon.jpg',
    locationCountry: COUNTRIES_MOCKED[0],
    address: '',
    rating: 4.5,
    creationDate: new Date('1976-4-1'),
    opportunity: 0.5,
    internshipType: 'assistant'
  }
];
