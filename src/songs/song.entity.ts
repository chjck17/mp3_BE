import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import Test from 'src/test/test.entity';

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
  
  // @ManyToOne(type => Test, test => test.id)
  // items: Test

  
}

export default Song;