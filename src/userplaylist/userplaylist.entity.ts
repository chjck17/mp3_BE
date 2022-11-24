import { Column,ManyToOne, Entity, PrimaryGeneratedColumn ,ManyToMany,JoinTable} from 'typeorm';
import User from 'src/users/user.entity';
import Song from 'src/songs/song.entity';
@Entity()
class UserPlaylist {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;
  @Column()
  public name: string;
  @Column()
  public state: boolean;
  @Column()
  public image: string;
  @Column()
  public description: string;
  @ManyToOne(() => User, (user: User) => user.userPlaylist)
  public user: User;
  @ManyToMany(()=> Song ,{
        cascade: true,
        eager:true
    })
  @JoinTable()
  public listSong:Song[]


}

export default UserPlaylist;