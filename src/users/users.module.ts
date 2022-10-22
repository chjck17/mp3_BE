import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './user.entity';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserPlaylist])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
