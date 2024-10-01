import { TicketStatusEnum } from '../enums/ticket-status.enum';

export class UpdateTicketDto {
  status: TicketStatusEnum;
  sessionPlaceId: number;
  sessionId: number;
  userId: number;
}
