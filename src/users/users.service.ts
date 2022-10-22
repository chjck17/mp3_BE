import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import { x } from '@hapi/joi';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }
  async getUserPlayList(id: User) {
   const playList =  this.usersRepository.find({ relations: ['userPlaylist'] });
    const UserPlayList = (await playList).filter(item=>item.id==id.id)
    return UserPlayList[0].userPlaylist;
  }
  async getById(id: number) {
    const user = await this.usersRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
  }
  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
