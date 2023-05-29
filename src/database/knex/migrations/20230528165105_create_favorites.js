/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex =>
  knex.schema.createTable('user_favorites', table => {
    table.increments('id');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.integer('dish_id').notNullable().references('id').inTable('dishes').onDelete('CASCADE');

  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('user_favorites');
