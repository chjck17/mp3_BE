import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Playlist {
  @PrimaryGeneratedColumn()
  public id?: number;
  
  @Column()
  public name: string;

}

export default Playlist;