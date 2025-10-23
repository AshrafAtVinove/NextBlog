import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Get(':id')
  get(@Param('id') id: number) {
    return this.users.findById(+id);
  }
}
