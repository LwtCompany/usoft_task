import { Entity, Column } from './entities';
import { RolesUser } from "../roles.enum";

@Entity()
export  class User {
  @Column()
  id:number;

  @Column()
  name: string;

  @Column()
  role: RolesUser;

  @Column()
  created_by: number;
}

