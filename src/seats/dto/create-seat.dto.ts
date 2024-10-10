import { Express } from 'express';

export class CreateSeatDto {
  name: string;
  description: string;
  price: number;
  img: Express.Multer.File;
}
