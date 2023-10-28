import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing Project
    await knex("Project").del();

    // Inserts seed Project
    await knex("Project").insert([
        {
            id: 1,
            org_id: 1,
            created_by: 2
        },
        {
            id: 2,
            org_id: 3,
            created_by: 2
        },
        {
            id: 3,
            org_id: 3,
            created_by: 2
        }
    ]);
}
