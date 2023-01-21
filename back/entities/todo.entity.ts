import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  // User でどのように Item と紐づいているか
  @ManyToOne(() => User, (user) => user.todos)
  user: User;

  // 上記で DB に userId が追加されるが typeorm 上はまだないので追加する
  @Column()
  userId: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
