import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShowType } from './entities/show-type.entity';
import { ShowTypeController } from './show-type.controller';
import { ShowTypeService } from './show-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShowType])],
  controllers: [ShowTypeController],
  providers: [ShowTypeService],
})
export class ShowTypeModule {}
