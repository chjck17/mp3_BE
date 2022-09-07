import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Album {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public idUser: number;
  
  @Column()
  public name: string;

  @Column()
  public author: string;

  @Column()
  public link: string;
}

export default Album;