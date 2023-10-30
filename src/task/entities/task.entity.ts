import { Entity, Column } from '../../users/entities/entities';
import { TaskStatus } from "../task.status";

@Entity()
export  class Task {
  @Column()
  id:number;

  @Column()
  created_by: number;

  @Column()
  project_id: number;

  @Column()
  due_date: number;

  @Column()
  worker_user_id: number;

  @Column()
  done_at: number;

  @Column()
  status: TaskStatus;
}
