import {Student} from '../models/student';
import {StudentService} from '../services/student/student.service';

const dateToday: Date = new Date();

export const STUDENTS_MOCKED: Student[] = [
  {
    id: 0,
    lastName: 'Durand',
    firstName: 'Marc'
  },
  {
    id: 1,
    lastName: 'Dupont',
    firstName: 'Jean'
  },
];
