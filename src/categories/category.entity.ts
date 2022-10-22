import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn  } from 'typeorm';
import Song from 'src/songs/song.entity';
@Entity()
class Category {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public name: string;
  @ManyToMany(()=>Song , (songs:Song)=>(songs.categories))
  @JoinTable()
  public songs :Song[]; 

}

export default Category;