import { Column,OneToMany, Entity, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';
import { join } from 'path';

@Entity()
class Test {
  @PrimaryGeneratedColumn('uuid')
  public id?: number;
  // @Column()
  // public playlistId: number;
   @Column()
   public userId: number;
  @OneToMany(type => UserPlaylist, userPlaylist => userPlaylist?.items)
  items: UserPlaylist[] ;


 
}

export default Test;