import { SessionPlace } from '../../session-places/entities/session-place.entity';
import { Session } from '../../sessions/entities/session.entity';

export class CreateTicketDto {
  place: SessionPlace;
  session: Session;
}
