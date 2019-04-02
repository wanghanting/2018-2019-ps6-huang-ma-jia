import {Internship} from '../models/internship';
import {COUNTRIES_MOCKED} from './countries.mock';
import {STUDENTS_MOCKED} from './students.mock';
import {Student} from "../models/student";
import {Company} from "../models/company";

export const INTERNSHIP_MOCKED: Internship[] = [
  {
    id: 0,
    name: 'UX Designer',
    student: STUDENTS_MOCKED[0],
    company: COUNTRIES_MOCKED[0],
    startDate: new Date('2019-4-1'),
    endDate: new Date('2019-9-1'),
    period: '5 mois',
    contract: 'CDI',
    salary: 'Haut',
    residence: 'Loge',
    ifHasCar: true,
    rating: 5,
    tuteur: 'Jean MEDECIN'
  },
  {
    id: 1,
    name: 'Back-end Designer',
    student: STUDENTS_MOCKED[1],
    company: COUNTRIES_MOCKED[2],
    startDate: new Date('2019-6-1'),
    endDate: new Date('2019-12-1'),
    period: '6 mois',
    contract: 'CDD',
    salary: 'Moyenne',
    residence: 'Loge',
    ifHasCar: false,
    rating: 4,
    tuteur: 'Jiazen Liu'
  }
];

