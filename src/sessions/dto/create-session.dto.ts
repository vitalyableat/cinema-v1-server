export class CreateSessionDto {
  start: Date;
  end: Date;
  available: boolean;
  videoTechnologyId: number;
  audioTechnologyId: number;
  languageId: number;
  showId: number;
  loungeId: number;
}
