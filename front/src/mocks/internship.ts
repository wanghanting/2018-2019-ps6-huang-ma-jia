import {Internship} from '../models/internship';
import {COUNTRIES_MOCKED} from './countries.mock';
import {STUDENTS_MOCKED} from './students.mock';

export const INTERNSHIP_MOCKED: Internship[] = [
  {
    id: 0,
    name: 'UX Designer',
    student: STUDENTS_MOCKED[0],
    company: COUNTRIES_MOCKED[0],
    startDate: new Date('2019-4-1'),
    endDate: new Date('2019-9-1')
  }
];
