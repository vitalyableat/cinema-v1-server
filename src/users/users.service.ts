import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { ChangeUserPasswordDto } from './dto/change-user-password.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(createUserDto);

    return await this.entityManager.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });

    return await this.entityManager.save(new User({ ...user, ...updateUserDto }));
  }

  async changePassword(id: number, { oldPassword, newPassword }: ChangeUserPasswordDto) {
    const user = await this.usersRepository.findOneBy({ id });

    if (oldPassword === user.password) {
      await this.usersRepository.save(new User({ ...user, password: newPassword }));
    }
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
