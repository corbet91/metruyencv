export interface TicketDocument {
  _id: string;
  userId: string;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITicket {
  userId: string;
  title: string;
  report: string;
  content: string;
}
