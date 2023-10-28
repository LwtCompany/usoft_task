import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing Project
    await knex("Task").del();

    // Inserts seed Project
    await knex("Task").insert([
        {
            id: 1,
            created_by: 2,
            project_id:1,
            due_date:1701153066,
            worker_user_id: 4,
            status: "CREATED",
            done_at: null
        },
        {
            id: 2,
            created_by: 2,
            project_id:1,
            due_date:1701153066,
            worker_user_id: 5,
            status: "CREATED",
            done_at: null
        },
        {
            id: 3,
            created_by: 2,
            project_id:1,
            due_date:1701239466,
            worker_user_id: 5,
            status: "CREATED",
            done_at: null
        }
    ]);
}
