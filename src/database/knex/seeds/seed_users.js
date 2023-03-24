/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { name: 'John Doe', email: 'john@email.com', password: '123456', admin: false },
    { name: 'Jane Doe', email: 'jane@email.com', password: '123456', admin: true },
  ]);
};

/**
 * use:
 *  $ npx knex seed:run
 * para executar as seeds knex no banco de dados.
 */
