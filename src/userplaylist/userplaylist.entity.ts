import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserPlaylist {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public playlistId: number;
  @Column()
  public userId: number;
}

export default UserPlaylist;