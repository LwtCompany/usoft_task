import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('Organizations ', function (table: any) {
      table.increments('id');
      table.string('name', 25).notNullable();
      table.integer('created_by').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
}

