import { Controller, Get, Post as HttpPost, Put, Delete, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private posts: PostsService) {}

  @Get()
  all() {
    return this.posts.findAll();
  }

  @HttpPost()
  create(@Body() dto: { title: string; content: string; authorId: number }) {
    return this.posts.create({ title: dto.title, content: dto.content, author: { id: dto.authorId } as any });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: { title?: string; content?: string }) {
    return this.posts.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posts.remove(+id);
  }
}
