const knex = require('../database/knex');
const { AppError } = require('../utils/AppError');

class CategoriesController {

  async index(request, response) {
    const categories = await knex('dish_categories');

    return response.json(categories);
  }

  async create(request, response) {
    const { name } = request.body;

    if (!name) throw new AppError('Informe o nome da categoria!');

    const categoryExists = await knex('dish_categories').where({ name }).first();
    if (categoryExists) throw new AppError('Categoria já existe!');

    const [ categoryId ] = await knex('dish_categories').insert({ name });

    return response.status(201).json({ id: categoryId, name });
  }
}

module.exports = CategoriesController;
