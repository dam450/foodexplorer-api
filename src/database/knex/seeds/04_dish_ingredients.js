/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('dish_ingredients').del()
  await knex('dish_ingredients').insert([
    {
      dish_id: 1,
      name: 'baunilha'
    },
    {
      name: 'mel',
      dish_id: 1
    },
    {
      name: 'castanha de caju',
      dish_id: 1
    },
    {
      name: 'damasco',
      dish_id: 2
    },
    {
      name: 'café',
      dish_id: 3
    },
    {
      name: 'camarões',
      dish_id: 4
    },

  ]);
};
