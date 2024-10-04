import { Express } from 'express';

export class CreateShowDto {
  duration: number;
  title: string;
  description: string;
  preview: Express.Multer.File;
  rentalStart: Date;
  rentalEnd: Date;
  age: number;
  trailer: string;
  available: boolean;
  showTypeId: number;
  languageIds: number[];
  genreIds: number[];
  audioTechnologyIds: number[];
  videoTechnologyIds: number[];
}
