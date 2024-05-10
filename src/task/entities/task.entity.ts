import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  task_id: number;
  @Column()
  description: string;
  @Column()
  color: string;
  @ManyToOne(() => User)
  user: User;
  @ManyToOne(() => TaskCategory)
  category: TaskCategory;
  @ManyToOne(() => TaskStatus)
  status: TaskStatus;

  @Column({default: true})
  isActive: boolean;

}