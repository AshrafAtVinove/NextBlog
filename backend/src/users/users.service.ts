import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(user: Partial<User>) {
    const u = this.repo.create(user);
    return this.repo.save(u);
  }

  findByEmail(email: string) {
    return this.repo.findOneBy({ email });
  }

  findById(id: number) {
    return this.repo.findOneBy({ id });
  }
}
