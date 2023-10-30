import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectModel } from "nest-knexjs";
import { Knex } from "knex";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, @InjectModel() private readonly knex: Knex) {}


async  canActivate(context: ExecutionContext):Promise<boolean> {


    const roles:string[] = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const userId = request.body?.created_by;
    const user = await this.knex('users').where('id', userId).first();
    const hasRole = () => roles.includes(user?.role);

    return user && user?.role && hasRole();

  }
}