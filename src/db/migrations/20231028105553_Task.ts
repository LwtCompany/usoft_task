import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('Task', function (table: any) {
      table.increments('id');
      table.integer('created_by').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('project_id').notNullable();
      table.integer('due_date').notNullable();
      table.integer('worker_user_id').notNullable();
      table.integer('done_at');
      table.string('status').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
}

