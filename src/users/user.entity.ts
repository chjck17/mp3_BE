import { Column, Entity, PrimaryGeneratedColumn,OneToMany, OneToOne, JoinColumn } from 'typeorm';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';
import RecentlySong from 'src/recentlysongs/recentlysong.entity';
import { Exclude } from 'class-transformer';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

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
  
  @OneToMany(() => UserPlaylist, (userPlaylist: UserPlaylist) => userPlaylist.user)
  public userPlaylist: UserPlaylist[];

  // @OneToOne(() => RecentlySong, (userPlaylist: RecentlySong) => userPlaylist.user)
  // public recentlySongs: RecentlySong[];


  @OneToOne(() => RecentlySong,{
  eager: true,
  cascade: true
  })
  @JoinColumn()
  public recentlySongs: RecentlySong;


  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;
  
  @Column({
    nullable: true
  })
  @Exclude()
  public currentHashedRefreshToken?: string;
  // @Column()
  // public stripeCustomerId: string;
}

export default User;