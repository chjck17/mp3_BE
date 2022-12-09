import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';
import RecentlySong from 'src/recentlysongs/recentlysong.entity';
import { Exclude } from 'class-transformer';
import FavoriteSong from 'src/favoritesongs/favoritesong.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column({ unique: true })
  public email: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column()
  public name: string;

  @Column()
  public role: string;

  @Column({ nullable: true })
  @Exclude()
  public password: string;

  @OneToMany(
    () => UserPlaylist,
    (userPlaylist: UserPlaylist) => userPlaylist.user,
  )
  public userPlaylist: UserPlaylist[];

  // @OneToOne(() => RecentlySong, (userPlaylist: RecentlySong) => userPlaylist.user)
  // public recentlySongs: RecentlySong[];

  @OneToOne(() => RecentlySong, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public recentlySongs: RecentlySong;

  @OneToOne(() => FavoriteSong, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public favoriteSongs: FavoriteSong;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;

  @Column({
    nullable: true,
  })
  @Exclude()
  public currentHashedRefreshToken?: string;

  @Column({ nullable: true })
  public sex: string;

  @Column({ nullable: true })
  public dateOfBirth: Date;

  @Column({ nullable: true })
  public country: string;
}

export default User;
