import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('Project', function (table: any) {
      table.increments('id');
      table.integer('org_id').notNullable();
      table.integer('created_by').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
}

