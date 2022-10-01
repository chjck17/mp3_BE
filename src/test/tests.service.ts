import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
import Test from './test.entity';
import UserPlaylistsService from 'src/userplaylist/userplaylists.service';
@Injectable()
export default class TestService {
  constructor(
    @InjectRepository(Test)
    private testsRepositoty: Repository<Test>,
    private userPlaylistsService :UserPlaylistsService,
  ) {}
  async order(user: number) {
        const playlistItems = await this.userPlaylistsService.listUserPlaylists();
        const UserPlaylist = playlistItems.filter(item => item.userId == user)
        // const subTotal = cartItems.map(item => item.total).reduce((acc, next) => acc + next);
     const test= new Test()
     test.userId=user
     test.items=UserPlaylist
        // const test = { items: UserPlaylist }
        // const tests= await this.testsRepositoty.create(test)
      //   return await this.testsRepositoty.save(tests)
        // return userOrder;
        // return await this.testsRepositoty.create(test);

          // const items = await this.testsRepositoty.create({UserPlaylist});

          return await this.testsRepositoty.save(test);

    }
  async getOrders(user: number) {
      const orders = await this.testsRepositoty.find()
      console.log(orders);
      
      // return orders.filter(item => item.items[0].userId == user)
      return orders 
  } 
}
