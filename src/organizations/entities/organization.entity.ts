

import { Entity, Column } from '../../users/entities/entities';
@Entity()
export  class Organization {
  @Column()
  id:number;

  @Column()
  name: string;

  @Column()
  created_by: number;
}
