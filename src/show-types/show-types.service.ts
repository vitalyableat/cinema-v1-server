import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateShowTypeDto } from './dto/create-show-type.dto';
import { UpdateShowTypeDto } from './dto/update-show-type.dto';
import { ShowType } from './entities/show-type.entity';

@Injectable()
export class ShowTypesService {
  constructor(
    @InjectRepository(ShowType)
    private readonly showTypesRepository: Repository<ShowType>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createShowTypeDto: CreateShowTypeDto): Promise<ShowType> {
    const showType = new ShowType(createShowTypeDto);

    return await this.entityManager.save(showType);
  }

  async findAll(): Promise<ShowType[]> {
    return await this.showTypesRepository.find();
  }

  async update(id: number, updateShowTypeDto: UpdateShowTypeDto): Promise<ShowType> {
    const showType = await this.showTypesRepository.findOneBy({ id });

    return await this.entityManager.save(new ShowType({ ...showType, ...updateShowTypeDto }));
  }

  async remove(id: number) {
    await this.showTypesRepository.delete(id);
  }
}
