import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private repo: Repository<Post>) {}

  create(post: Partial<Post>) {
    const p = this.repo.create(post);
    return this.repo.save(p);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Post>) {
    const post = await this.findOne(id);
    if (!post) throw new Error('Post not found');
    Object.assign(post, data);
    return this.repo.save(post);
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    if (!post) throw new Error('Post not found');
    return this.repo.remove(post);
  }

}
