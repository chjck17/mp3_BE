import { Column, Entity, PrimaryGeneratedColumn ,ManyToMany,JoinTable} from 'typeorm';
import Song from 'src/songs/song.entity';
@Entity()
class Album {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public name: string;
  @Column()
  public state: boolean;
  @ManyToMany(()=> Song ,{
        cascade: true,
        eager:true
    })
  @JoinTable()
  public listSong:Song[]
  @Column()
  public description: string;
  @Column()
  public image: string;
}

export default Album;