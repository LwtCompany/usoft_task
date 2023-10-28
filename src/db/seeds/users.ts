import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            id: 1,
            name: 'Admin',
            role: 'admin',
            created_by: 0
        },
        {
            id: 2,
            name: 'OwnerCompany',
            role: 'owner',
            created_by: 1
        },
        {
            id: 3,
            name: 'Employee1',
            role: 'user',
            created_by: 2
        },
        {
            id: 4,
            name: 'Employee2',
            role: 'user',
            created_by: 2
        },
        {
            id: 5,
            name: 'Employee3',
            role: 'user',
            created_by: 2
        }
    ]);
}
