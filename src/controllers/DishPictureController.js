const knex = require("../database/knex");

class DishPictureController {
  async updatePicture(request, response) {
    const { id } = request.params;
    const { filename } = request.file;

    console.log('file: ', filename);

    const dish = await knex('dishes').where({ id }).first();
    if (!dish) throw new AppError('Prato não encontrado', 404);

    //TODO: save dish image
    return response.json({ filename });
  }
}

module.exports = DishPictureController;
