import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class TaskCategory {
  @PrimaryGeneratedColumn()
  taskcategory_id: number;

  @Column()
  description: string;

  @Column()
  color: string;

  @OneToMany(() => Task, task => task.category)
  tasks: Task[];
}