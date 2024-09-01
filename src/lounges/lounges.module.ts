import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lounge } from './entities/lounge.entity';
import { LoungesController } from './lounges.controller';
import { LoungesService } from './lounges.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lounge])],
  controllers: [LoungesController],
  providers: [LoungesService],
})
export class LoungesModule {}
