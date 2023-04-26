const knex = require('../database/knex');
const { AppError } = require('../utils/AppError');

class DishesController {
  async create(request, response) {
    const { name, description, price, category_id, ingredients } = request.body;

    const newDish = { name, description, price, category_id: Number(category_id) };

    const [ dishId ] = await knex('dishes').insert(newDish);

    const ingredientList = ingredients.map((item) => {
      return {
        dish_id: dishId,
        name: item,
      };
    });

    if (ingredientList.length > 0) await knex('dish_ingredients').insert(ingredientList);

    return response.status(201).json({ id: dishId });
  }

  async update(request, response) {
    const { name } = request.body;
    const { id } = request.params;

    const dish = await knex('dishes').where({ id }).first();
    if (!dish) throw new AppError('Prato não encontrado', 404);

    dish.name = name ?? dish.name;
    //TODO: make dish update
    return response.json({ dish });
  }

  async show(request, response) {
    const { id } = request.params;

    if (isNaN(id)) throw new AppError('Código do prato inválido!', 400);

    const dish = await knex('dishes as d')
      .join('dish_categories as c', 'c.id', 'd.category_id')
      .select('d.id', 'd.name', 'd.description', 'd.price', 'd.picture', 'c.name as category')
      .where('d.id', id)
      .first();

    if (!dish) throw new AppError('Prato não localizado!', 404);

    const ingredientsList = await knex('dish_ingredients').select('name').where({ dish_id: id });
    const ingredients = ingredientsList.map((item) => item.name);

    return response.json({ ...dish, ingredients });
  }

  async index(request, response) {
    // const { id } = request.params;
    // const { id: userId } = request.user;

    const dishList = await knex('dishes as d')
      .join('dish_categories as c', 'c.id', 'd.category_id')
      .select('d.id', 'd.name', 'd.description', 'd.price', 'd.picture', 'c.name as category');

    return response.json(dishList);
  }
}

module.exports = DishesController;
