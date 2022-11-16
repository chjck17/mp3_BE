import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, ManyToOne,JoinTable } from 'typeorm';
import Category from 'src/categories/category.entity';
@Entity()
class RecentlySong {
  @PrimaryGeneratedColumn('uuid')
  public id?: number;
  @Column()
  public name: string;
  @Column()
  public author: string;
  @Column()
  public link: string;

  @ManyToMany(()=> Category , (categories:Category)=>(categories.songs))
  public categories:Category[]
}

export default RecentlySong;