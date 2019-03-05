import {User} from "./user";

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  user?: User;
  major?: string;
  archived?: boolean;
}
