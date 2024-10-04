import { Express } from 'express';

export class CreateShowPhotoDto {
  img: Express.Multer.File;
  showId: number;
}
