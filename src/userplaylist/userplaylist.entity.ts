import { Column,ManyToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Test from 'src/test/test.entity';

@Entity()
class UserPlaylist {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public playlistId: number;
  @Column()
  public userId: number;
  @ManyToOne(type => Test, test => test.items)
  items: Test

}

export default UserPlaylist;