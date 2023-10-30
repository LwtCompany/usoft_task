
import { Entity, Column } from '../../users/entities/entities';
@Entity()
export  class OrganizationUser {
  @Column()
  id:number;

  @Column()
  org_id: number;

  @Column()
  user_id: number;
}

