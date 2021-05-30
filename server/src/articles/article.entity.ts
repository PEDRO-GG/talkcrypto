import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  createdOn: string;

  @Column()
  authorId: number;
  @ManyToOne((type) => User, (user) => user.articles) //  { eager: false }
  @JoinColumn({ name: 'authorId' })
  author: User;
}
