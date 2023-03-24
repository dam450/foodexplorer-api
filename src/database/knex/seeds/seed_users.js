/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      name: 'John Doe',
      email: 'john@email.com',
      password: '$2a$08$H8fFI3qparBlFK44JxuGz.k/HEdngmYNRePYZJNgOiIM/3pNuNkKS',
      admin: false,
    },
    {
      name: 'Jane Doe',
      email: 'jane@email.com',
      password: '$2a$08$qxjzyetA.ZNEcKDGz4ChpexlWcNICjfkWrf.3f89YXqzp.Mx4E0zi',
      admin: true,
    },
  ]);
};

/**
 * use:
 *  $ npx knex seed:run
 * para executar as seeds knex no banco de dados.
 */
