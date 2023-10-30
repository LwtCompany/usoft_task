import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from "./db/knex.module";
import { GuardModule } from "./guard/guard.module";
import { OrganizationsModule } from './organizations/organizations.module';
import { OrganizationUserModule } from './organization-user/organization-user.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ UsersModule, DatabaseModule, GuardModule, OrganizationsModule, OrganizationUserModule, ProjectModule, TaskModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
