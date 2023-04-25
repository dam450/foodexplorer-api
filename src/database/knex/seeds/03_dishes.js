/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('dishes').del()
  await knex('dishes').insert([
    {
      name: 'Macarons',
      description: 'Farinha de amêndoas, manteiga, claras e açúcar.',
      price: 79.97,
      category_id: 1,
    },
    {
      name: 'Bolo de damasco',
      description: 'Damascos frescos em uma massa sem glúten.',
      price: 19.97,
      category_id: 1,
    },
    {
      name: 'Espresso',
      description: 'Café cremoso feito na temperatura e pressões perfeitas.',
      price: 15.97,
      category_id: 3,
    },
    {
      name: 'Spaguetti Gambe',
      description: 'Massa fresca com camarões e pesto.',
      price: 79.97,
      category_id: 2,
    },
  ]);

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
