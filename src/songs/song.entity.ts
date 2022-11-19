import { Column, Entity, PrimaryGeneratedColumn,ManyToMany, ManyToOne,JoinTable } from 'typeorm';
import Category from 'src/categories/category.entity';
@Entity()
class Song {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;
  @Column()
  public name: string;
  @Column()
  public author: string;
  @Column()
  public link: string;
  @Column()
  public image: string;
  @Column()
  public description: string;
  @ManyToMany(()=> Category , (categories:Category)=>(categories.songs))
  public categories:Category[]
}

export default Song;