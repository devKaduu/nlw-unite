export interface IAttendees {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}

export interface IData {
  attendees: IAttendees[];
  total: number;
}
