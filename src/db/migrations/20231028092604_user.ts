import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('users', function (table: any) {
      table.increments('id').notNullable().unique();
      table.string('name', 25).notNullable().unique();
      table.string('role', 10).notNullable();
      table.integer('created_by').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
}

