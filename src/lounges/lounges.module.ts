import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SpacesModule } from '../spaces/spaces.module';
import { Lounge } from './entities/lounge.entity';
import { LoungesController } from './lounges.controller';
import { LoungesService } from './lounges.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lounge]), SpacesModule],
  controllers: [LoungesController],
  providers: [LoungesService],
  exports: [TypeOrmModule],
})
export class LoungesModule {}
