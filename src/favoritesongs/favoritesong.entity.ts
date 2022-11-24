import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, ManyToOne,JoinTable, OneToOne } from 'typeorm';
import Song from 'src/songs/song.entity';
import User from 'src/users/user.entity';
@Entity()
class FavoriteSong {
  @PrimaryGeneratedColumn('uuid')
  public id?: number;

  @ManyToMany(()=> Song ,{
        cascade: true,
        eager:true
    })  
  @JoinTable()
  public listSong:Song[]
  
  
  @OneToOne(() => User, (user: User) => user.favoriteSongs)
  public user: User;
}

export default FavoriteSong;