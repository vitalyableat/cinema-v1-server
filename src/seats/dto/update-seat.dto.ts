import { Express } from 'express';

export class UpdateSeatDto {
  name: string;
  description: string;
  price: number;
  img: Express.Multer.File;
}
