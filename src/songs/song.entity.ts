import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Song {
  @PrimaryGeneratedColumn()
  public id?: number;
  
  @Column()
  public name: string;

  @Column()
  public author: string;

  @Column()
  public link: string;
}

export default Song;