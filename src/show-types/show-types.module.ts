import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShowType } from './entities/show-type.entity';
import { ShowTypesController } from './show-types.controller';
import { ShowTypesService } from './show-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShowType])],
  controllers: [ShowTypesController],
  providers: [ShowTypesService],
  exports: [TypeOrmModule],
})
export class ShowTypesModule {}
