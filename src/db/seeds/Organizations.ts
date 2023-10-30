import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("Organizations").del();

    // Inserts seed entries
    await knex("Organizations").insert([
        {
            id: 1,
            name: 'Usoft',
            created_by: 1
        },
        {
            id: 2,
            name: 'UniSoft',
            created_by: 1
        },
        {
            id: 3,
            name: 'BdmGroup',
            created_by: 1
        }
    ]);
}
