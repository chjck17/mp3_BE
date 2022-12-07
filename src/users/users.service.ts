import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import { x } from '@hapi/joi';
import * as bcrypt from 'bcrypt';
import RePassWordUserDto from './dto/rePassWord.dto';
import EditProfileDto from './dto/editProfile.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
  async getUserPlayList(id: User) {
    const playList = this.usersRepository.find({ relations: ['userPlaylist'] });
    const UserPlayList = (await playList).filter(item => item.id == id.id);
    return UserPlayList[0].userPlaylist;
  }
  async getUserPlayListDetail(id: User, playlistId: string) {
    const playList = this.usersRepository.find({ relations: ['userPlaylist'] });
    const listSong = (await playList)
      .find(item => item.id === id.id)
      .userPlaylist.find(x => x.id === playlistId);
    return listSong;
  }
  async getById(id: string) {
    const user = await this.usersRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }
  async rePassWord(id: string ,password:RePassWordUserDto ) {
    const newUser = await this.usersRepository.update(id,password)
    return newUser;
    
  }
  async markEmailAsConfirmed(email: string) {
    return this.usersRepository.update({ email }, {
      isEmailConfirmed: true
    });
    
  }
  async createWithGoogle(email: string, name: string) {
    const newUser = await this.usersRepository.create({
      email,
      name,
      role: 'user',
      password: '123456789',
      isRegisteredWithGoogle: true,
    });
    await this.usersRepository.save(newUser);
    return newUser;
  }
  async setCurrentRefreshToken(refreshToken: string, userId: string) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.usersRepository.update(userId, {
      currentHashedRefreshToken,
    });
  }
  async editProfile(id: string ,profile:EditProfileDto ) {
   const user = await this.usersRepository.findOne(id);
   return await this.usersRepository.save({
      ...user,sex:profile.sex,dateOfBirth:profile.dateOfBirth,country:profile.country
    }) 
  }
}
