import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;
  
  @Column()
  public role: string;

  @Column()
  public password: string;
  @OneToMany(() => UserPlaylist, (userPlaylist: UserPlaylist) => userPlaylist.user)
  public userPlaylist: UserPlaylist[];
}

export default User;