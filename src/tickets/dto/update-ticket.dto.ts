import { TicketStatusEnum } from '../enums/ticket-status.enum';

export class UpdateTicketDto {
  status: TicketStatusEnum;
  userId: number;
}
