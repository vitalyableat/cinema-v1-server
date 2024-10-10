import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';
import { v4 as uuidv4 } from 'uuid';

const configService = new ConfigService();

@Injectable()
export class FilesService {
  private minioClient: Minio.Client;

  constructor() {
    this.minioClient = new Minio.Client({
      endPoint: configService.getOrThrow('MINIO_HOST'),
      port: Number(configService.getOrThrow('MINIO_PORT')),
      useSSL: false,
      accessKey: configService.getOrThrow('MINIO_ROOT_USER'),
      secretKey: configService.getOrThrow('MINIO_ROOT_PASSWORD'),
    });
  }

  async uploadFile(bucket: string, file: Express.Multer.File) {
    await this.ensureBucket(bucket);

    const filename = uuidv4();
    await this.minioClient.putObject(bucket, filename, file.buffer, file.size);
    return `${bucket}/${filename}`;
  }

  async getFile(path: string) {
    const [bucket, filename] = path.split('/');

    return await this.minioClient.getObject(bucket, filename);
  }

  async removeFile(path: string) {
    const [bucket, filename] = path.split('/');

    await this.minioClient.removeObject(bucket, filename);
  }

  async ensureBucket(bucket: string) {
    const exists = await this.minioClient.bucketExists(bucket);
    if (!exists) {
      await this.minioClient.makeBucket(bucket);
    }
  }
}
