import { Entity, Column } from '../../users/entities/entities';
@Entity()
export  class Project {
  @Column()
  id:number;

  @Column()
  org_id: number;

  @Column()
  created_by: number;
}
