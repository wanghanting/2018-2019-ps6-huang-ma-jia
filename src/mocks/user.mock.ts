import {User} from "../models/user";

const dateToday: Date = new Date();

export const USERS_MOCKED: User[] = [
  {
    id: 1,
    firstName: "xisto",
    lastName: "castro",
    email: "xisto.castro@example.com",
    profilePicture: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    id: 2,
    firstName: "aubin",
    lastName: "olivier",
    email: "aubin.olivier@example.com",
    profilePicture: "https://randomuser.me/api/portraits/men/42.jpg",
  },
];
