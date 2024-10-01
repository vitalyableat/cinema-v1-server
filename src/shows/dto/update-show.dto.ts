export class UpdateShowDto {
  duration: number;
  title: string;
  description: string;
  preview: string;
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
