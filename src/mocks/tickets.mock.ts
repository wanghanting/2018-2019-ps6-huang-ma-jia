import { Ticket } from '../models/ticket';
import { USERS_MOCKED } from '../mocks/user.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'GE4 in Madrid',
    description: '',
    date: dateToday,
    user: USERS_MOCKED[0],
    major: 'GE',
    archived: true
  },
  {
    title: 'SI5 in New York',
    description: 'Description du voyage',
    date: dateToday,
    user: USERS_MOCKED[1],
    major: 'SI',
    archived: false
  },
];
