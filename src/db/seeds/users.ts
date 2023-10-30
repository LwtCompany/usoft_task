import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            name: 'Admin',
            role: 'admin',
            created_by: 0
        },
        {

            name: 'OwnerCompany',
            role: 'owner',
            created_by: 1
        },
        {

            name: 'Employee1',
            role: 'user',
            created_by: 2
        },
        {

            name: 'Employee2',
            role: 'user',
            created_by: 2
        },
        {

            name: 'Employee3',
            role: 'user',
            created_by: 2
        }
    ]);
}
