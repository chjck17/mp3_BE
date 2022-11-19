import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, ManyToOne,JoinTable, OneToOne } from 'typeorm';
import Song from 'src/songs/song.entity';
import User from 'src/users/user.entity';
@Entity()
class RecentlySong {
  @PrimaryGeneratedColumn('uuid')
  public id?: number;

  @ManyToMany(()=> Song ,{
        cascade: true,
        eager:true
    })
    
  @JoinTable()
  public listSong:Song[]
  
  
  @OneToOne(() => User, (user: User) => user.recentlySongs)
  public user: User;
}

export default RecentlySong;