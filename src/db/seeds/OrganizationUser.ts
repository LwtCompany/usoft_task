import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("OrganizationUser").del();

    // Inserts seed entries
    await knex("OrganizationUser").insert([
        {
            id: 1,
            org_id: 1,
            user_id: 3
        },
        {
            id: 2,
            org_id: 1,
            user_id: 4
        },
        {
            id: 3,
            org_id: 3,
            user_id: 5
        }
    ]);
}
