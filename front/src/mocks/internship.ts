import {Internship} from '../models/internship';
import {STUDENTS_MOCKED} from './students.mock';

export const INTERNSHIP_MOCKED: Internship[] = [
  {
    id: 0,
    name: 'UX Designer',
    student: STUDENTS_MOCKED[0],
    company: null,
    startDate: new Date('2019-4-1'),
    endDate: new Date('2019-9-1'),
    period: '5 mois',
    contractRenewed: 'CDI',
    salary: 'Haut',
    residence: 'Loge',
    hasCompanyCar: true,
    rating: 5,
    tuteur: 'Jean MEDECIN'
  },
  {
    id: 1,
    name: 'Back-end Designer',
    student: STUDENTS_MOCKED[1],
    company: null,
    startDate: new Date('2019-6-1'),
    endDate: new Date('2019-12-1'),
    period: '6 mois',
    contractRenewed: 'CDD',
    salary: 'Moyenne',
    residence: 'Loge',
    hasCompanyCar: false,
    rating: 4,
    tuteur: 'Jiazen Liu'
  }
];

